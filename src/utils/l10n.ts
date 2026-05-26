import { observable, action, toJS } from 'mobx';

// ── Alle Sprachen ──────────────────────────────────────────────────────────

const LANGUAGES: Record<string, any> = {
  en: {
    toolbar: {
      duration: 'Duration', opacity: 'Opacity', effects: 'Effects', blur: 'Blur',
      curvedText: 'Curved text', curvePower: 'Power', temperature: 'Temperature',
      saturation: 'Saturation', contrast: 'Contrast', shadows: 'Shadows', white: 'White',
      black: 'Black', vibrance: 'Vibrance', textBackground: 'Background',
      backgroundCornerRadius: 'Corner radius', backgroundOpacity: 'Opacity',
      backgroundPadding: 'Padding', brightness: 'Brightness', filters: 'Filters',
      sepia: 'Sepia', grayscale: 'Grayscale', textStroke: 'Text Stroke', shadow: 'Shadow',
      border: 'Border', cornerRadius: 'Corner Radius', copyStyle: 'Copy style',
      uppercase: 'Uppercase', position: 'Position', layering: 'Layering',
      toForward: 'To Front', up: 'Forward', down: 'Backward', toBottom: 'To back',
      alignLeft: 'Align left', alignCenter: 'Align center', alignRight: 'Align right',
      alignTop: 'Align top', alignMiddle: 'Align middle', alignBottom: 'Align bottom',
      flip: 'Flip', flipHorizontally: 'Flip horizontally', flipVertically: 'Flip vertically',
      fitToBackground: 'Fit to page', removeBackground: 'Remove background',
      removeBackgroundTitle: 'Remove background from image', cancelRemoveBackground: 'Cancel',
      confirmRemoveBackground: 'Confirm', crop: 'Crop', cropDone: 'Done', cropCancel: 'Cancel',
      clip: 'Apply mask', removeClip: 'Remove mask', removeMask: 'Remove mask',
      transparency: 'Transparency',
      lockedDescription: 'Object is locked. Unlock it to allow changes from canvas.',
      unlockedDescription: 'Object is unlocked. Lock it to prevent changes from canvas.',
      removeElements: 'Remove elements', duplicateElements: 'Duplicate elements',
      download: 'Download', saveAsImage: 'Save as image', saveAsPDF: 'Save as PDF',
      lineHeight: 'Line height', letterSpacing: 'Letter spacing', offsetX: 'Offset X',
      offsetY: 'Offset Y', color: 'Color', selectable: 'Selectable', draggable: 'Draggable',
      removable: 'Removable', resizable: 'Resizable', contentEditable: 'Can change content',
      styleEditable: 'Can change style', alwaysOnTop: 'Always on top',
      showInExport: 'Show in export', ungroupElements: 'Ungroup', groupElements: 'Group',
      lineSize: 'Line size', fade: 'Fade', move: 'Move', zoom: 'Zoom', animate: 'Animate',
      rotate: 'Rotate', none: 'None', bounce: 'Bounce', blink: 'Blink', strength: 'Strength',
      spaceEvenly: 'Space evenly', horizontalDistribution: 'Horizontally',
      verticalDistribution: 'Vertically', strokeWidth: 'Stroke Width',
      colorPicker: { solid: 'Solid', linear: 'Linear', angle: 'Angle' },
      aiText: {
        aiWrite: 'AI write', rewrite: 'Rewrite', shorten: 'Shorten',
        continue: 'Continue writing', proofread: 'Proofread', tones: 'Tones',
        friendly: 'Friendly', professional: 'Professional', humorous: 'Humorous',
        formal: 'Formal', customPrompt: 'Custom prompt', generatedResult: 'Generated result',
        cancel: 'Cancel', generate: 'Generate', back: 'Back', tryAgain: 'Try Again',
        insert: 'Insert', promptPlaceholder: 'Describe what you want to generate',
      },
    },
    workspace: {
      noPages: 'There are no pages yet...', addPage: 'Add page', removePage: 'Remove page',
      duplicatePage: 'Duplicate page', moveUp: 'Move up', moveDown: 'Move down',
    },
    scale: { reset: 'Reset' },
    error: { removeBackground: 'Ops! Something went wrong. Background can not be removed.' },
    sidePanel: {
      templates: 'Templates', searchTemplatesWithSameSize: 'Show templates with the same size',
      searchPlaceholder: 'Search...', otherFormats: 'Other formats', noResults: 'No results',
      error: 'Loading failed...', text: 'Text', uploadFont: 'Upload font', myFonts: 'My fonts',
      photos: 'Photos', videos: 'Videos', animations: 'Animations', effects: 'Effects',
      elements: 'Elements', shapes: 'Shapes', lines: 'Lines', upload: 'Upload',
      uploadImage: 'Add file', uploadTip: 'Upload your assets', background: 'Background',
      resize: 'Resize', layers: 'Layers', animate: 'Animate',
      layerTypes: { image: 'Image', text: 'Text', svg: 'SVG', line: 'Line', figure: 'Figure', group: 'Group' },
      layersTip: 'Elements on your active page:', noLayers: 'No elements on the page...',
      namePlaceholder: 'Type element name...', useMagicResize: 'Use magic resize',
      clipImage: 'Mask image', width: 'Width', height: 'Height',
      magicResizeDescription: 'Magic resize will automatically resize and move all elements on the canvas',
      units: 'px',
      headerText: 'Header', createHeader: 'Create header', subHeaderText: 'Sub Header',
      createSubHeader: 'Create sub header', bodyText: 'Body text', createBody: 'Create body text',
    },
    pagesTimeline: {
      pages: 'Pages', removePage: 'Remove page', addPage: 'Add page',
      duplicatePage: 'Duplicate page', removeAudio: 'Remove audio',
    },
    contextMenu: {
      duplicate: 'Duplicate', remove: 'Remove', lock: 'Lock', unlock: 'Unlock',
      copy: 'Copy', paste: 'Paste', copyStyle: 'Copy style', moveUp: 'Move up',
      moveDown: 'Move down', moveBack: 'Move back', moveForward: 'Move forward',
    },
  },

  de: {
    toolbar: {
      duration: 'Dauer', opacity: 'Deckkraft', effects: 'Effekte', blur: 'Unschärfe',
      curvedText: 'Gebogener Text', curvePower: 'Stärke', temperature: 'Temperatur',
      saturation: 'Sättigung', contrast: 'Kontrast', shadows: 'Schatten', white: 'Weiß',
      black: 'Schwarz', vibrance: 'Lebendigkeit', textBackground: 'Hintergrund',
      backgroundCornerRadius: 'Eckenradius', backgroundOpacity: 'Deckkraft',
      backgroundPadding: 'Innenabstand', brightness: 'Helligkeit', filters: 'Filter',
      sepia: 'Sepia', grayscale: 'Graustufen', textStroke: 'Textumrandung', shadow: 'Schatten',
      border: 'Rahmen', cornerRadius: 'Eckenradius', copyStyle: 'Stil kopieren',
      uppercase: 'Großbuchstaben', position: 'Position', layering: 'Reihenfolge',
      toForward: 'Ganz nach vorne', up: 'Nach vorne', down: 'Nach hinten', toBottom: 'Ganz nach hinten',
      alignLeft: 'Links', alignCenter: 'Zentrieren', alignRight: 'Rechts',
      alignTop: 'Oben', alignMiddle: 'Mitte', alignBottom: 'Unten',
      flip: 'Spiegeln', flipHorizontally: 'Horizontal spiegeln', flipVertically: 'Vertikal spiegeln',
      fitToBackground: 'An Seite anpassen', removeBackground: 'Hintergrund entfernen',
      removeBackgroundTitle: 'Bildhintergrund entfernen', cancelRemoveBackground: 'Abbrechen',
      confirmRemoveBackground: 'Bestätigen', crop: 'Zuschneiden', cropDone: 'Fertig',
      cropCancel: 'Abbrechen', clip: 'Maske anwenden', removeClip: 'Maske entfernen',
      removeMask: 'Maske entfernen', transparency: 'Transparenz',
      lockedDescription: 'Objekt gesperrt. Entsperren um Änderungen zu erlauben.',
      unlockedDescription: 'Objekt entsperrt. Sperren um Änderungen zu verhindern.',
      removeElements: 'Elemente entfernen', duplicateElements: 'Elemente duplizieren',
      download: 'Herunterladen', saveAsImage: 'Als Bild speichern', saveAsPDF: 'Als PDF speichern',
      lineHeight: 'Zeilenhöhe', letterSpacing: 'Zeichenabstand', offsetX: 'Versatz X',
      offsetY: 'Versatz Y', color: 'Farbe', selectable: 'Auswählbar', draggable: 'Verschiebbar',
      removable: 'Entfernbar', resizable: 'Skalierbar', contentEditable: 'Inhalt bearbeitbar',
      styleEditable: 'Stil bearbeitbar', alwaysOnTop: 'Immer im Vordergrund',
      showInExport: 'Im Export anzeigen', ungroupElements: 'Gruppierung aufheben',
      groupElements: 'Gruppieren', lineSize: 'Linienstärke', fade: 'Einblenden',
      move: 'Bewegen', zoom: 'Zoom', animate: 'Animieren', rotate: 'Drehen',
      none: 'Keine', bounce: 'Springen', blink: 'Blinken', strength: 'Intensität',
      spaceEvenly: 'Gleichmäßig verteilen', horizontalDistribution: 'Horizontal',
      verticalDistribution: 'Vertikal', strokeWidth: 'Linienstärke',
      colorPicker: { solid: 'Einfarbig', linear: 'Linear', angle: 'Winkel' },
      aiText: {
        aiWrite: 'KI schreiben', rewrite: 'Umschreiben', shorten: 'Kürzen',
        continue: 'Weiter schreiben', proofread: 'Korrektur lesen', tones: 'Tonlage',
        friendly: 'Freundlich', professional: 'Professionell', humorous: 'Humorvoll',
        formal: 'Förmlich', customPrompt: 'Eigene Anweisung', generatedResult: 'Ergebnis',
        cancel: 'Abbrechen', generate: 'Erstellen', back: 'Zurück', tryAgain: 'Nochmal',
        insert: 'Einfügen', promptPlaceholder: 'Beschreibe was erstellt werden soll',
      },
    },
    workspace: {
      noPages: 'Noch keine Seiten vorhanden...', addPage: 'Seite hinzufügen',
      removePage: 'Seite entfernen', duplicatePage: 'Seite duplizieren',
      moveUp: 'Nach oben', moveDown: 'Nach unten',
    },
    scale: { reset: 'Zurücksetzen' },
    error: { removeBackground: 'Fehler! Hintergrund konnte nicht entfernt werden.' },
    sidePanel: {
      templates: 'Vorlagen', searchTemplatesWithSameSize: 'Vorlagen gleicher Größe',
      searchPlaceholder: 'Suchen...', otherFormats: 'Andere Formate', noResults: 'Keine Ergebnisse',
      error: 'Laden fehlgeschlagen...', text: 'Text', uploadFont: 'Schrift hochladen',
      myFonts: 'Meine Schriften', photos: 'Fotos', videos: 'Videos',
      animations: 'Animationen', effects: 'Effekte', elements: 'Elemente',
      shapes: 'Formen', lines: 'Linien', upload: 'Hochladen',
      uploadImage: 'Datei hinzufügen', uploadTip: 'Dateien hochladen',
      background: 'Hintergrund', resize: 'Größe ändern', layers: 'Ebenen', animate: 'Animieren',
      layerTypes: { image: 'Bild', text: 'Text', svg: 'SVG', line: 'Linie', figure: 'Form', group: 'Gruppe' },
      layersTip: 'Elemente auf der aktiven Seite:', noLayers: 'Keine Elemente auf der Seite...',
      namePlaceholder: 'Elementname eingeben...', useMagicResize: 'Intelligente Größenänderung',
      clipImage: 'Bild maskieren', width: 'Breite', height: 'Höhe',
      magicResizeDescription: 'Passt alle Elemente automatisch an die neue Canvas-Größe an',
      units: 'px',
      headerText: 'Überschrift', createHeader: 'Überschrift erstellen',
      subHeaderText: 'Unterüberschrift', createSubHeader: 'Unterüberschrift erstellen',
      bodyText: 'Fließtext', createBody: 'Fließtext erstellen',
    },
    pagesTimeline: {
      pages: 'Seiten', removePage: 'Seite entfernen', addPage: 'Seite hinzufügen',
      duplicatePage: 'Seite duplizieren', removeAudio: 'Audio entfernen',
    },
    contextMenu: {
      duplicate: 'Duplizieren', remove: 'Entfernen', lock: 'Sperren', unlock: 'Entsperren',
      copy: 'Kopieren', paste: 'Einfügen', copyStyle: 'Stil kopieren',
      moveUp: 'Nach oben', moveDown: 'Nach unten', moveBack: 'Nach hinten',
      moveForward: 'Nach vorne',
    },
  },

  fr: {
    toolbar: {
      duration: 'Durée', opacity: 'Opacité', effects: 'Effets', blur: 'Flou',
      curvedText: 'Texte courbé', curvePower: 'Puissance', temperature: 'Température',
      saturation: 'Saturation', contrast: 'Contraste', shadows: 'Ombres', white: 'Blanc',
      black: 'Noir', vibrance: 'Vibrance', textBackground: 'Arrière-plan',
      backgroundCornerRadius: 'Rayon', backgroundOpacity: 'Opacité',
      backgroundPadding: 'Rembourrage', brightness: 'Luminosité', filters: 'Filtres',
      sepia: 'Sépia', grayscale: 'Niveaux de gris', textStroke: 'Contour', shadow: 'Ombre',
      border: 'Bordure', cornerRadius: 'Rayon', copyStyle: 'Copier le style',
      uppercase: 'Majuscules', position: 'Position', layering: 'Ordre',
      toForward: 'Premier plan', up: 'Avant', down: 'Arrière', toBottom: 'Arrière-plan',
      alignLeft: 'Gauche', alignCenter: 'Centre', alignRight: 'Droite',
      alignTop: 'Haut', alignMiddle: 'Milieu', alignBottom: 'Bas',
      flip: 'Miroir', flipHorizontally: 'Miroir horizontal', flipVertically: 'Miroir vertical',
      fitToBackground: 'Ajuster à la page', removeBackground: 'Supprimer le fond',
      removeBackgroundTitle: "Supprimer l'arrière-plan", cancelRemoveBackground: 'Annuler',
      confirmRemoveBackground: 'Confirmer', crop: 'Recadrer', cropDone: 'Terminer',
      cropCancel: 'Annuler', clip: 'Appliquer masque', removeClip: 'Supprimer masque',
      removeMask: 'Supprimer masque', transparency: 'Transparence',
      lockedDescription: 'Objet verrouillé.', unlockedDescription: 'Objet déverrouillé.',
      removeElements: 'Supprimer', duplicateElements: 'Dupliquer',
      download: 'Télécharger', saveAsImage: 'Enregistrer comme image', saveAsPDF: 'Enregistrer en PDF',
      lineHeight: 'Interligne', letterSpacing: 'Espacement', offsetX: 'Décalage X',
      offsetY: 'Décalage Y', color: 'Couleur', selectable: 'Sélectionnable',
      draggable: 'Déplaçable', removable: 'Supprimable', resizable: 'Redimensionnable',
      contentEditable: 'Contenu modifiable', styleEditable: 'Style modifiable',
      alwaysOnTop: 'Toujours au premier plan', showInExport: "Afficher à l'export",
      ungroupElements: 'Dégrouper', groupElements: 'Grouper',
      lineSize: 'Taille ligne', fade: 'Fondu', move: 'Déplacer', zoom: 'Zoom',
      animate: 'Animer', rotate: 'Pivoter', none: 'Aucun', bounce: 'Rebond',
      blink: 'Clignoter', strength: 'Intensité', spaceEvenly: 'Répartir',
      horizontalDistribution: 'Horizontal', verticalDistribution: 'Vertical',
      strokeWidth: 'Épaisseur',
      colorPicker: { solid: 'Uni', linear: 'Linéaire', angle: 'Angle' },
      aiText: {
        aiWrite: 'IA écrire', rewrite: 'Réécrire', shorten: 'Raccourcir',
        continue: 'Continuer', proofread: 'Relire', tones: 'Tons',
        friendly: 'Amical', professional: 'Professionnel', humorous: 'Humoristique',
        formal: 'Formel', customPrompt: 'Invite personnalisée', generatedResult: 'Résultat',
        cancel: 'Annuler', generate: 'Générer', back: 'Retour', tryAgain: 'Réessayer',
        insert: 'Insérer', promptPlaceholder: 'Décrivez ce que vous voulez générer',
      },
    },
    workspace: {
      noPages: 'Aucune page pour le moment...', addPage: 'Ajouter une page',
      removePage: 'Supprimer la page', duplicatePage: 'Dupliquer la page',
      moveUp: 'Monter', moveDown: 'Descendre',
    },
    scale: { reset: 'Réinitialiser' },
    error: { removeBackground: "Erreur! L'arrière-plan ne peut pas être supprimé." },
    sidePanel: {
      templates: 'Modèles', searchTemplatesWithSameSize: 'Même taille',
      searchPlaceholder: 'Rechercher...', otherFormats: 'Autres formats',
      noResults: 'Aucun résultat', error: 'Chargement échoué...', text: 'Texte',
      uploadFont: 'Télécharger police', myFonts: 'Mes polices', photos: 'Photos',
      videos: 'Vidéos', animations: 'Animations', effects: 'Effets',
      elements: 'Éléments', shapes: 'Formes', lines: 'Lignes', upload: 'Télécharger',
      uploadImage: 'Ajouter fichier', uploadTip: 'Télécharger vos ressources',
      background: 'Arrière-plan', resize: 'Redimensionner', layers: 'Calques',
      animate: 'Animer',
      layerTypes: { image: 'Image', text: 'Texte', svg: 'SVG', line: 'Ligne', figure: 'Forme', group: 'Groupe' },
      layersTip: 'Éléments sur la page active :', noLayers: 'Aucun élément...',
      namePlaceholder: "Nom de l'élément...", useMagicResize: 'Redimensionnement magique',
      clipImage: 'Masquer image', width: 'Largeur', height: 'Hauteur',
      magicResizeDescription: 'Redimensionne automatiquement tous les éléments',
      units: 'px',
      headerText: 'Titre', createHeader: 'Créer titre', subHeaderText: 'Sous-titre',
      createSubHeader: 'Créer sous-titre', bodyText: 'Corps', createBody: 'Créer corps',
    },
    pagesTimeline: {
      pages: 'Pages', removePage: 'Supprimer page', addPage: 'Ajouter page',
      duplicatePage: 'Dupliquer page', removeAudio: 'Supprimer audio',
    },
    contextMenu: {
      duplicate: 'Dupliquer', remove: 'Supprimer', lock: 'Verrouiller', unlock: 'Déverrouiller',
      copy: 'Copier', paste: 'Coller', copyStyle: 'Copier style',
      moveUp: 'Monter', moveDown: 'Descendre', moveBack: 'Reculer', moveForward: 'Avancer',
    },
  },

  es: {
    toolbar: {
      duration: 'Duración', opacity: 'Opacidad', effects: 'Efectos', blur: 'Desenfoque',
      curvedText: 'Texto curvo', curvePower: 'Potencia', temperature: 'Temperatura',
      saturation: 'Saturación', contrast: 'Contraste', shadows: 'Sombras', white: 'Blanco',
      black: 'Negro', vibrance: 'Vibración', textBackground: 'Fondo',
      backgroundCornerRadius: 'Radio', backgroundOpacity: 'Opacidad',
      backgroundPadding: 'Relleno', brightness: 'Brillo', filters: 'Filtros',
      sepia: 'Sepia', grayscale: 'Escala de grises', textStroke: 'Contorno', shadow: 'Sombra',
      border: 'Borde', cornerRadius: 'Radio', copyStyle: 'Copiar estilo',
      uppercase: 'Mayúsculas', position: 'Posición', layering: 'Orden',
      toForward: 'Al frente', up: 'Adelante', down: 'Atrás', toBottom: 'Al fondo',
      alignLeft: 'Izquierda', alignCenter: 'Centro', alignRight: 'Derecha',
      alignTop: 'Arriba', alignMiddle: 'Medio', alignBottom: 'Abajo',
      flip: 'Voltear', flipHorizontally: 'Voltear horizontal', flipVertically: 'Voltear vertical',
      fitToBackground: 'Ajustar a página', removeBackground: 'Eliminar fondo',
      removeBackgroundTitle: 'Eliminar fondo', cancelRemoveBackground: 'Cancelar',
      confirmRemoveBackground: 'Confirmar', crop: 'Recortar', cropDone: 'Listo',
      cropCancel: 'Cancelar', clip: 'Aplicar máscara', removeClip: 'Quitar máscara',
      removeMask: 'Quitar máscara', transparency: 'Transparencia',
      lockedDescription: 'Objeto bloqueado.', unlockedDescription: 'Objeto desbloqueado.',
      removeElements: 'Eliminar', duplicateElements: 'Duplicar',
      download: 'Descargar', saveAsImage: 'Guardar como imagen', saveAsPDF: 'Guardar como PDF',
      lineHeight: 'Altura de línea', letterSpacing: 'Espaciado', offsetX: 'Desplazamiento X',
      offsetY: 'Desplazamiento Y', color: 'Color', selectable: 'Seleccionable',
      draggable: 'Arrastrable', removable: 'Eliminable', resizable: 'Redimensionable',
      contentEditable: 'Contenido editable', styleEditable: 'Estilo editable',
      alwaysOnTop: 'Siempre al frente', showInExport: 'Mostrar en exportación',
      ungroupElements: 'Desagrupar', groupElements: 'Agrupar',
      lineSize: 'Tamaño línea', fade: 'Fundido', move: 'Mover', zoom: 'Zoom',
      animate: 'Animar', rotate: 'Rotar', none: 'Ninguno', bounce: 'Rebotar',
      blink: 'Parpadear', strength: 'Intensidad', spaceEvenly: 'Distribuir',
      horizontalDistribution: 'Horizontal', verticalDistribution: 'Vertical',
      strokeWidth: 'Grosor',
      colorPicker: { solid: 'Sólido', linear: 'Lineal', angle: 'Ángulo' },
      aiText: {
        aiWrite: 'IA escribir', rewrite: 'Reescribir', shorten: 'Acortar',
        continue: 'Continuar', proofread: 'Revisar', tones: 'Tonos',
        friendly: 'Amigable', professional: 'Profesional', humorous: 'Humorístico',
        formal: 'Formal', customPrompt: 'Indicación personalizada', generatedResult: 'Resultado',
        cancel: 'Cancelar', generate: 'Generar', back: 'Atrás', tryAgain: 'Reintentar',
        insert: 'Insertar', promptPlaceholder: 'Describe lo que quieres generar',
      },
    },
    workspace: {
      noPages: 'Aún no hay páginas...', addPage: 'Añadir página',
      removePage: 'Eliminar página', duplicatePage: 'Duplicar página',
      moveUp: 'Subir', moveDown: 'Bajar',
    },
    scale: { reset: 'Restablecer' },
    error: { removeBackground: '¡Error! No se pudo eliminar el fondo.' },
    sidePanel: {
      templates: 'Plantillas', searchTemplatesWithSameSize: 'Mismo tamaño',
      searchPlaceholder: 'Buscar...', otherFormats: 'Otros formatos',
      noResults: 'Sin resultados', error: 'Error al cargar...', text: 'Texto',
      uploadFont: 'Subir fuente', myFonts: 'Mis fuentes', photos: 'Fotos',
      videos: 'Vídeos', animations: 'Animaciones', effects: 'Efectos',
      elements: 'Elementos', shapes: 'Formas', lines: 'Líneas', upload: 'Subir',
      uploadImage: 'Añadir archivo', uploadTip: 'Sube tus recursos',
      background: 'Fondo', resize: 'Redimensionar', layers: 'Capas', animate: 'Animar',
      layerTypes: { image: 'Imagen', text: 'Texto', svg: 'SVG', line: 'Línea', figure: 'Figura', group: 'Grupo' },
      layersTip: 'Elementos en la página activa:', noLayers: 'Sin elementos...',
      namePlaceholder: 'Nombre del elemento...', useMagicResize: 'Redimensión mágica',
      clipImage: 'Enmascarar imagen', width: 'Ancho', height: 'Alto',
      magicResizeDescription: 'Redimensiona automáticamente todos los elementos',
      units: 'px',
      headerText: 'Encabezado', createHeader: 'Crear encabezado',
      subHeaderText: 'Subencabezado', createSubHeader: 'Crear subencabezado',
      bodyText: 'Cuerpo', createBody: 'Crear cuerpo',
    },
    pagesTimeline: {
      pages: 'Páginas', removePage: 'Eliminar página', addPage: 'Añadir página',
      duplicatePage: 'Duplicar página', removeAudio: 'Eliminar audio',
    },
    contextMenu: {
      duplicate: 'Duplicar', remove: 'Eliminar', lock: 'Bloquear', unlock: 'Desbloquear',
      copy: 'Copiar', paste: 'Pegar', copyStyle: 'Copiar estilo',
      moveUp: 'Subir', moveDown: 'Bajar', moveBack: 'Atrás', moveForward: 'Adelante',
    },
  },

  it: {
    toolbar: {
      duration: 'Durata', opacity: 'Opacità', effects: 'Effetti', blur: 'Sfocatura',
      curvedText: 'Testo curvo', curvePower: 'Potenza', temperature: 'Temperatura',
      saturation: 'Saturazione', contrast: 'Contrasto', shadows: 'Ombre', white: 'Bianco',
      black: 'Nero', vibrance: 'Vivacità', textBackground: 'Sfondo',
      backgroundCornerRadius: 'Raggio', backgroundOpacity: 'Opacità',
      backgroundPadding: 'Spaziatura', brightness: 'Luminosità', filters: 'Filtri',
      sepia: 'Seppia', grayscale: 'Scala di grigi', textStroke: 'Contorno', shadow: 'Ombra',
      border: 'Bordo', cornerRadius: 'Raggio', copyStyle: 'Copia stile',
      uppercase: 'Maiuscolo', position: 'Posizione', layering: 'Ordine',
      toForward: 'In primo piano', up: 'Avanti', down: 'Indietro', toBottom: 'In fondo',
      alignLeft: 'Sinistra', alignCenter: 'Centro', alignRight: 'Destra',
      alignTop: 'Alto', alignMiddle: 'Mezzo', alignBottom: 'Basso',
      flip: 'Specchio', flipHorizontally: 'Specchio orizzontale', flipVertically: 'Specchio verticale',
      fitToBackground: 'Adatta alla pagina', removeBackground: 'Rimuovi sfondo',
      removeBackgroundTitle: 'Rimuovi sfondo', cancelRemoveBackground: 'Annulla',
      confirmRemoveBackground: 'Conferma', crop: 'Ritaglia', cropDone: 'Fine',
      cropCancel: 'Annulla', clip: 'Applica maschera', removeClip: 'Rimuovi maschera',
      removeMask: 'Rimuovi maschera', transparency: 'Trasparenza',
      lockedDescription: 'Oggetto bloccato.', unlockedDescription: 'Oggetto sbloccato.',
      removeElements: 'Rimuovi', duplicateElements: 'Duplica',
      download: 'Scarica', saveAsImage: 'Salva come immagine', saveAsPDF: 'Salva come PDF',
      lineHeight: 'Interlinea', letterSpacing: 'Spaziatura', offsetX: 'Offset X',
      offsetY: 'Offset Y', color: 'Colore', selectable: 'Selezionabile',
      draggable: 'Trascinabile', removable: 'Rimovibile', resizable: 'Ridimensionabile',
      contentEditable: 'Contenuto modificabile', styleEditable: 'Stile modificabile',
      alwaysOnTop: 'Sempre in primo piano', showInExport: "Mostra nell'esportazione",
      ungroupElements: 'Separa gruppo', groupElements: 'Raggruppa',
      lineSize: 'Spessore linea', fade: 'Dissolvenza', move: 'Muovi', zoom: 'Zoom',
      animate: 'Anima', rotate: 'Ruota', none: 'Nessuno', bounce: 'Rimbalzo',
      blink: 'Lampeggio', strength: 'Intensità', spaceEvenly: 'Distribuisci',
      horizontalDistribution: 'Orizzontale', verticalDistribution: 'Verticale',
      strokeWidth: 'Spessore',
      colorPicker: { solid: 'Pieno', linear: 'Lineare', angle: 'Angolo' },
      aiText: {
        aiWrite: 'IA scrivi', rewrite: 'Riscrivi', shorten: 'Accorcia',
        continue: 'Continua', proofread: 'Correggi', tones: 'Toni',
        friendly: 'Amichevole', professional: 'Professionale', humorous: 'Umoristico',
        formal: 'Formale', customPrompt: 'Prompt personalizzato', generatedResult: 'Risultato',
        cancel: 'Annulla', generate: 'Genera', back: 'Indietro', tryAgain: 'Riprova',
        insert: 'Inserisci', promptPlaceholder: 'Descrivi cosa vuoi generare',
      },
    },
    workspace: {
      noPages: 'Nessuna pagina ancora...', addPage: 'Aggiungi pagina',
      removePage: 'Rimuovi pagina', duplicatePage: 'Duplica pagina',
      moveUp: 'Su', moveDown: 'Giù',
    },
    scale: { reset: 'Ripristina' },
    error: { removeBackground: 'Errore! Lo sfondo non può essere rimosso.' },
    sidePanel: {
      templates: 'Modelli', searchTemplatesWithSameSize: 'Stessa dimensione',
      searchPlaceholder: 'Cerca...', otherFormats: 'Altri formati',
      noResults: 'Nessun risultato', error: 'Caricamento fallito...', text: 'Testo',
      uploadFont: 'Carica font', myFonts: 'I miei font', photos: 'Foto',
      videos: 'Video', animations: 'Animazioni', effects: 'Effetti',
      elements: 'Elementi', shapes: 'Forme', lines: 'Linee', upload: 'Carica',
      uploadImage: 'Aggiungi file', uploadTip: 'Carica le tue risorse',
      background: 'Sfondo', resize: 'Ridimensiona', layers: 'Livelli', animate: 'Anima',
      layerTypes: { image: 'Immagine', text: 'Testo', svg: 'SVG', line: 'Linea', figure: 'Figura', group: 'Gruppo' },
      layersTip: 'Elementi nella pagina attiva:', noLayers: 'Nessun elemento...',
      namePlaceholder: 'Nome elemento...', useMagicResize: 'Ridimensionamento magico',
      clipImage: 'Maschera immagine', width: 'Larghezza', height: 'Altezza',
      magicResizeDescription: 'Ridimensiona automaticamente tutti gli elementi',
      units: 'px',
      headerText: 'Intestazione', createHeader: 'Crea intestazione',
      subHeaderText: 'Sottotitolo', createSubHeader: 'Crea sottotitolo',
      bodyText: 'Corpo', createBody: 'Crea corpo',
    },
    pagesTimeline: {
      pages: 'Pagine', removePage: 'Rimuovi pagina', addPage: 'Aggiungi pagina',
      duplicatePage: 'Duplica pagina', removeAudio: 'Rimuovi audio',
    },
    contextMenu: {
      duplicate: 'Duplica', remove: 'Rimuovi', lock: 'Blocca', unlock: 'Sblocca',
      copy: 'Copia', paste: 'Incolla', copyStyle: 'Copia stile',
      moveUp: 'Su', moveDown: 'Giù', moveBack: 'Indietro', moveForward: 'Avanti',
    },
  },
};

// ── MobX observable state ───────────────────────────────────────────────────

function deepClone(obj: any): any {
  return JSON.parse(JSON.stringify(obj));
}

const translations = observable(deepClone(LANGUAGES.de) as any);

function isObject(val: any): boolean {
  return val != null && typeof val === 'object';
}

function mergeDeep(target: any, source: any) {
  Object.keys(source).forEach((key) => {
    const src = source[key];
    const tgt = target[key];
    if (isObject(src) && isObject(tgt)) {
      mergeDeep(tgt, src);
    } else {
      target[key] = src;
    }
  });
}

function validateKeys(target: any, source: any, path = '') {
  Object.keys(source).forEach((key) => {
    const src = source[key];
    const fullPath = path ? `${path}.${key}` : key;
    if (isObject(src)) {
      if (isObject(target[key])) validateKeys(target[key], src, fullPath);
      else console.warn(`Missing nested translation object at '${fullPath}'`);
    } else if (target[key] === undefined) {
      console.warn(`Missing translation '${fullPath}'`);
    }
  });
}

export const setTranslations = action(
  (updates: Record<string, any>, { validate = false } = {}) => {
    if (validate) validateKeys(translations, updates);
    mergeDeep(translations, updates);
  },
);

// ── Language switcher ───────────────────────────────────────────────────────

export type Lang = 'de' | 'en' | 'fr' | 'es' | 'it';

export const LANG_LABELS: Record<Lang, string> = {
  de: '🇩🇪 Deutsch',
  en: '🇬🇧 English',
  fr: '🇫🇷 Français',
  es: '🇪🇸 Español',
  it: '🇮🇹 Italiano',
};

export const setLanguage = action((lang: Lang) => {
  const base = deepClone(LANGUAGES[lang] || LANGUAGES.de);
  // Reset auf Basis-Englisch, dann neue Sprache drüber
  mergeDeep(translations, deepClone(LANGUAGES.en));
  mergeDeep(translations, base);
  localStorage.setItem('op_lang', lang);
});

export function getSavedLang(): Lang {
  return (localStorage.getItem('op_lang') as Lang) || 'de';
}

export const getTranslations = () => toJS(translations);

// ── t() helper ─────────────────────────────────────────────────────────────

function getNestedValue(obj: any, path: string): any {
  const parts = path.split('.');
  let current = obj;
  for (const part of parts) {
    if (current == null) return undefined;
    current = current[part];
  }
  return current;
}

const _missingLogged: Record<string, boolean> = {};

export const t = (key: string): string => {
  const value = getNestedValue(translations, key);
  if (value !== undefined) return value;
  if (!_missingLogged[key]) {
    _missingLogged[key] = true;
    console.warn(`Missing translation '${key}'`);
  }
  const parts = key.split('.');
  const last = parts[parts.length - 1] || ' ';
  return last.charAt(0).toUpperCase() + last.slice(1);
};


// ── Beim Start gespeicherte Sprache sofort anwenden ──────────────────────────
;(() => {
  const saved = typeof localStorage !== 'undefined' ? localStorage.getItem('op_lang') as Lang : null;
  if (saved && saved !== 'de' && LANGUAGES[saved]) {
    mergeDeep(translations, deepClone(LANGUAGES[saved]));
  }
})();
