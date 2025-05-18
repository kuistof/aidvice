# Business Advisor App

Eine moderne, webbasierte Anwendung, die als interaktives Tool für Unternehmer dient. Die App unterstützt Nutzer dabei, ihren aktuellen Business-Status zu erfassen und systematisch die nächsten strategischen Schritte zu erkennen und umzusetzen.

## Design-Vorgaben

*   **Designstil**: Modern, minimalistisch, von iOS/Apple inspiriert
*   **Farbwelt**: Neutrale Töne (Weiß, Hellgrau, Schwarz), mit Hellblau als Akzentfarbe.
*   **Interaktionen**: Sanfte Hover-Effekte, Scaling bei Klick.
*   **UI-Komponenten**: Abgerundete Kanten, klare Typografie (Inter), weiche Schatten.
*   **Ansatz**: Mobile-first, vollständig responsive.

## Technologie-Stack

*   **Frontend**: React.js (mit TypeScript)
*   **Styling**: Tailwind CSS
*   **Build-Tool**: Vite
*   **Icons**: Lucide React

## Setup und Start

1.  **Abhängigkeiten installieren**:
    Öffnen Sie ein Terminal im Hauptverzeichnis des Projekts und führen Sie einen der folgenden Befehle aus:
    ```bash
    npm install
    ```
    oder
    ```bash
    yarn install
    ```

2.  **Entwicklungsserver starten**:
    Nachdem die Installation abgeschlossen ist, starten Sie den Entwicklungsserver:
    ```bash
    npm run dev
    ```
    oder
    ```bash
    yarn dev
    ```
    Die Anwendung sollte nun unter `http://localhost:5173` (oder einem ähnlichen Port, der im Terminal angezeigt wird) erreichbar sein.

## Struktur

*   `public/`: Statische Assets.
*   `src/`: Quellcode der Anwendung.
    *   `assets/`: Bilder, SVGs etc.
    *   `components/`: Wiederverwendbare UI-Komponenten.
        *   `dashboard/`: Komponenten spezifisch für das Dashboard.
            *   `layout/`: Topbar, Sidebar.
        *   `llm/`: Komponenten für das AI Assistant Panel.
        *   `onboarding/`: Komponenten für den Onboarding-Flow.
        *   `ui/`: Allgemeine UI-Elemente (z.B. ToggleSwitch).
    *   `contexts/`: React Contexts (falls benötigt).
    *   `hooks/`: Benutzerdefinierte React Hooks (falls benötigt).
    *   `pages/`: Hauptseiten der Anwendung (z.B. Onboarding, Dashboard).
    *   `App.tsx`: Wurzelkomponente der React-Anwendung.
    *   `main.tsx`: Einstiegspunkt der React-Anwendung.
    *   `index.css`: Globale Stile und Tailwind-Importe.
*   `index.html`: HTML-Einstiegspunkt.
*   `package.json`: Projekt-Metadaten und Abhängigkeiten.
*   `tailwind.config.js`: Konfiguration für Tailwind CSS.
*   `postcss.config.js`: Konfiguration für PostCSS.
*   `vite.config.js`: Konfiguration für Vite (automatisch generiert durch Vite-Setup).
*   `tsconfig.json` & `tsconfig.node.json`: TypeScript-Konfigurationen.

## Implementierte Features (Demo-Status)

*   **Onboarding Flow**: Mehrstufiger Prozess zur Erfassung initialer Unternehmensdaten.
    *   Unternehmensinformationen
    *   Status zu Marketing und Vertrieb
    *   Aktuelle Herausforderungen
*   **Dashboard Page**: Zentrale Übersicht nach dem Onboarding.
    *   Topbar mit Logo, (Dummy) Benachrichtigungen, Avatar und XP-Anzeige.
    *   Sidebar für die Navigation.
    *   **Business Scorecard**: Visualisierung des Fortschritts (Dummy-Wert).
    *   **Current Phase Display**: Anzeige der aktuellen Unternehmensphase mit Farbcodierung.
    *   **Next Step Recommendation Card**: Statischer Vorschlag für den nächsten Schritt.
    *   **Quick Access Tools**: Buttons für Notizen, Bibliothek und AI Assistant (Dummy-Funktionen).
    *   **Milestone Tracker**: Horizontale Leiste zur Visualisierung der Fortschrittsphasen.
*   **LLM Assistant Panel**: Slide-over Panel mit Chat-Interface (Dummy-Antworten).
    *   Kontextinformationen (aktuelle Phase, letzter Fortschritt).
    *   Vorschläge für Prompts.
*   **Gamification Layer**:
    *   Visuelles Staging-System (Phasen) im Milestone Tracker.
    *   XP-Anzeige in der Topbar.

Der Fokus lag bisher auf UI/UX. Backend-Logik und persistente Datenspeicherung sind nicht implementiert. 