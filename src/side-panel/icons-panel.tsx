'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { InputGroup } from '@blueprintjs/core';
import { Search } from '@blueprintjs/icons';
import * as FeatherIcons from 'feather-icons';
import { StoreType } from '../model/store';

const FEATHER_LIST = Object.keys(FeatherIcons.icons);

const BOX_ICON_NAMES: string[] = [
  'bx-home', 'bx-user', 'bx-cog', 'bx-heart', 'bx-star',
  'bx-search', 'bx-bell', 'bx-camera', 'bx-calendar', 'bx-chat',
  'bx-check', 'bx-x', 'bx-plus', 'bx-minus', 'bx-edit',
  'bx-trash', 'bx-download', 'bx-upload', 'bx-share', 'bx-link',
  'bx-lock', 'bx-envelope', 'bx-phone', 'bx-map', 'bx-globe',
  'bx-image', 'bx-video', 'bx-music', 'bx-file', 'bx-folder',
  'bx-cart', 'bx-credit-card', 'bx-bar-chart', 'bx-pie-chart',
  'bx-like', 'bx-bookmark', 'bx-flag', 'bx-tag', 'bx-trophy',
  'bx-gift', 'bx-diamond', 'bx-crown', 'bx-rocket', 'bx-shield',
  'bx-key', 'bx-wifi', 'bx-sun', 'bx-moon', 'bx-cloud',
  'bx-tree', 'bx-leaf', 'bx-church', 'bx-cross', 'bx-pray',
];

async function fetchBoxSvg(name: string): Promise<string> {
  try {
    const res = await fetch(
      `https://cdn.jsdelivr.net/npm/boxicons@latest/svg/regular/${name}.svg`
    );
    if (!res.ok) throw new Error();
    return await res.text();
  } catch {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
      <text x="1" y="14" font-size="7">${name.replace('bx-', '')}</text></svg>`;
  }
}

function svgToUrl(svgStr: string, size = 100): string {
  const sized = svgStr
    .replace(/width="[^"]*"/, `width="${size}"`)
    .replace(/height="[^"]*"/, `height="${size}"`);
  return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(sized)))}`;
}

export const IconsPanel = ({ store }: { store: StoreType }) => {
  const [search, setSearch] = useState('');
  const [tab, setTab] = useState<'feather' | 'box'>('feather');
  const [boxSvgs, setBoxSvgs] = useState<Record<string, string>>({});

  useEffect(() => {
    if (tab !== 'box') return;
    const missing = BOX_ICON_NAMES.filter(n => !boxSvgs[n]);
    if (!missing.length) return;
    Promise.all(
      missing.map(async n => [n, await fetchBoxSvg(n)] as [string, string])
    ).then(entries =>
      setBoxSvgs(prev => ({ ...prev, ...Object.fromEntries(entries) }))
    );
  }, [tab]);

  const addFeather = useCallback((name: string) => {
    const svg = (FeatherIcons.icons as any)[name].toSvg({
      color: '#000000', width: 100, height: 100,
    });
    store.activePage.addElement({
      type: 'svg', src: svgToUrl(svg), width: 100, height: 100,
    });
  }, [store]);

  const addBox = useCallback(async (name: string) => {
    const svgStr = boxSvgs[name] || await fetchBoxSvg(name);
    store.activePage.addElement({
      type: 'svg', src: svgToUrl(svgStr), width: 100, height: 100,
    });
  }, [store, boxSvgs]);

  const filteredFeather = FEATHER_LIST.filter(n => n.includes(search.toLowerCase()));
  const filteredBox = BOX_ICON_NAMES.filter(n => n.includes(search.toLowerCase()));
  const items = tab === 'feather' ? filteredFeather : filteredBox;

  return React.createElement(
    'div',
    { style: { height: '100%', display: 'flex', flexDirection: 'column' } },

    // Suche
    React.createElement(InputGroup, {
      leftIcon: React.createElement(Search, null),
      placeholder: 'Icons suchen...',
      onChange: (e: any) => setSearch(e.target.value),
      type: 'search',
      style: { marginBottom: '10px' },
    }),

    // Tab Toggle
    React.createElement(
      'div',
      {
        style: {
          display: 'flex', marginBottom: '10px',
          borderRadius: 6, overflow: 'hidden',
          border: '1px solid #e5e7eb',
        },
      },
      ...(['feather', 'box'] as const).map(t =>
        React.createElement(
          'button',
          {
            key: t,
            onClick: () => setTab(t),
            style: {
              flex: 1, padding: '5px 0', border: 'none',
              background: tab === t ? '#2563eb' : '#f9fafb',
              color: tab === t ? '#fff' : '#6b7280',
              cursor: 'pointer', fontSize: 12, fontWeight: 600,
            },
          },
          t === 'feather' ? 'Feather Icons' : 'Boxicons'
        )
      )
    ),

    // Zähler
    React.createElement(
      'p',
      { style: { textAlign: 'center', fontSize: 11, color: '#9ca3af', margin: '0 0 8px' } },
      `${items.length} Icons`
    ),

    // Grid scrollbar
    React.createElement(
      'div',
      {
        style: {
          flex: 1, overflowY: 'auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: 4, alignContent: 'start',
        },
      },
      ...items.map(name =>
        React.createElement('button', {
          key: name,
          title: name,
          onClick: () => tab === 'feather' ? addFeather(name) : addBox(name),
          style: {
            background: '#f5f5f5', border: 'none', borderRadius: 6,
            padding: 6, cursor: 'pointer', aspectRatio: '1',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          },
          onMouseEnter: (e: any) => (e.currentTarget.style.background = '#dbeafe'),
          onMouseLeave: (e: any) => (e.currentTarget.style.background = '#f5f5f5'),
          dangerouslySetInnerHTML: {
            __html: tab === 'feather'
              ? (FeatherIcons.icons as any)[name].toSvg({ width: 20, height: 20, color: '#374151' })
              : (boxSvgs[name] ?? `<span style="font-size:8px;color:#aaa">${name.replace('bx-', '')}</span>`),
          },
        })
      )
    )
  );
};