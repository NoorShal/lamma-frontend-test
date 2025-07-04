# Product Card UI (Lamma Frontend Test)


## Features

**Localization & RTL Support:**
- i18n implementation using react-i18next
- Complete RTL layout support for Arabic
- Language toggle in header
- Tajawal font for typography

**Clean Architecture:**
- Custom hooks for business logic 
- Zustand for state management
- Component-based architecture
- Performance optimized with React.memo and useMemo

## Setup Instructions

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```


## dependencies

- **Tailwind CSS** - for styling
- **react-i18next** - Professional internationalization
- **Zustand** - For state management
- **Lucide React** - , For icons

## Localization Logic

The app uses react-i18next for multi language support:

**Language Management:**
- Automatic language detection from browser/localStorage (we are actually not storing the locale preference since it's not required in the task description)
- RTL direction automatically applied for Arabic

**RTL Implementation:**
- Uses Tailwind's native `ltr:` and `rtl:` modifiers
- Document direction (`dir` attribute) automatically set

**Custom Hook (`useLocalization`):**
- Wraps react-i18next functionality
- Provides simple: `t()`, `isRTL`, `toggleLanguage()`
- Encapsulates all i18n logic in one place


---
