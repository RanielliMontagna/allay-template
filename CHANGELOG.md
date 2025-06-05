# Changelog

## [1.4.0](https://github.com/RanielliMontagna/allay-template/compare/v1.3.0...v1.4.0) (2025-06-05)


### Features

* add Badge component with styles, tests, and integrate into Home screen ([d9c7b67](https://github.com/RanielliMontagna/allay-template/commit/d9c7b67c2bdd63272d7002928c667ebe8455ecf0))
* add bottom tab navigation and settings screen with updated styles ([d35017d](https://github.com/RanielliMontagna/allay-template/commit/d35017de9b138356be815eab82baf9a2f38c8368))
* add Button component with styles, helper functions, and tests ([e902461](https://github.com/RanielliMontagna/allay-template/commit/e902461ed7ccccd7c7ee3b325c1074ccee5e6862))
* add capitalize utility functions and tests; integrate into navigation for dynamic tab labels ([dfb050e](https://github.com/RanielliMontagna/allay-template/commit/dfb050eb8b431ed94432b71bcadb4044dc86f5ca))
* add language selection bottom sheet with flag components and styles; update package dependencies ([ac1201c](https://github.com/RanielliMontagna/allay-template/commit/ac1201ce016a88cec4468c4e07c5190642b80145))
* add settings localization and update settings screen to use translations ([bf33859](https://github.com/RanielliMontagna/allay-template/commit/bf33859ffb8d102d887a57ca95cf495d0a27e94d))
* add text component with customizable styles ([9007ca4](https://github.com/RanielliMontagna/allay-template/commit/9007ca43b4f7bdab1aa2a2905d3420e8200719f9))
* add theme selection bottom sheet with styles and functionality; update settings translations ([b259239](https://github.com/RanielliMontagna/allay-template/commit/b2592390c679c2be0ca79ccc90bf3cccc9a169d9))
* enhance settings screen with language and theme preferences; add i18n support for translations ([f46641f](https://github.com/RanielliMontagna/allay-template/commit/f46641f5b21d938b90a98d5d4ab2e827111b8c9f))
* implement Avatar component; refactor imports for consistency ([6956bbb](https://github.com/RanielliMontagna/allay-template/commit/6956bbb422371ed02022737f517d96c505a5d6be))
* implement layout components and integrate them into the app; add ScreenHeader and TabLayout ([a6e97e1](https://github.com/RanielliMontagna/allay-template/commit/a6e97e1bde2a2d28173845a2b006f7ba850d6e3d))
* integrate react-native-toast-message for theme change notifications ([7ee1836](https://github.com/RanielliMontagna/allay-template/commit/7ee1836bec25c4bb4975a516a4ffbbfa1bd492da))
* refactor theme types to use centralized definitions for colors, spacing, radius, and typography ([6aa8890](https://github.com/RanielliMontagna/allay-template/commit/6aa8890ab6116c39ff44ec5598eece9a3f5cb532))
* update icon imports to use @expo/vector-icons and mock it in tests ([a7b22aa](https://github.com/RanielliMontagna/allay-template/commit/a7b22aa2be603e6d656ae311f33ee8b85e855008))


### Bug Fixes

* adjust scale animation value for selected language option in bottom sheet ([d114c90](https://github.com/RanielliMontagna/allay-template/commit/d114c906f153f8c1314b316f122e9a9f1e0a1afc))

## [1.3.0](https://github.com/RanielliMontagna/allay-template/compare/v1.2.0...v1.3.0) (2025-05-22)


### Features

* add react-native-reanimated and integrate into OfflineBar component ([e2abb99](https://github.com/RanielliMontagna/allay-template/commit/e2abb99b4278fb0f14bf5c48b05882c43d0a27b9))
* enhance app structure with SafeAreaProvider and StatusBar ([87e6944](https://github.com/RanielliMontagna/allay-template/commit/87e6944408fdecd6c5a35a36c756541b7d2e49b9))
* implement splash screen with updated styles and assets ([ec3c577](https://github.com/RanielliMontagna/allay-template/commit/ec3c577cf42c94804ede895c53d65b687e07a705))
* refactor LoadingIndicator and add OfflineBar component ([1df0f54](https://github.com/RanielliMontagna/allay-template/commit/1df0f549cc1e75fb0733044878242e7384816f34))
* update dependencies and add react-dom and react-native-web ([70efdf9](https://github.com/RanielliMontagna/allay-template/commit/70efdf9cf7597b60007667541ff24f38f6ff64ce))
* update MainActivity and styles for splash screen integration ([eb3f4ae](https://github.com/RanielliMontagna/allay-template/commit/eb3f4aec922ca5cb171ff00b903f43b801d7850a))


### Bug Fixes

* downgrade @react-native-async-storage/async-storage and @sentry/react-native dependencies for compatibility ([d24b976](https://github.com/RanielliMontagna/allay-template/commit/d24b976a7f722a6e6735c80c3d805c66ca0fe497))

## [1.2.0](https://github.com/RanielliMontagna/allay-template/compare/v1.1.0...v1.2.0) (2025-05-20)


### Features

* add expo-font dependency and update app.json plugins ([11caa27](https://github.com/RanielliMontagna/allay-template/commit/11caa272abc81c484bbca05068aaa929598cfefc))
* add integrations ([59577c2](https://github.com/RanielliMontagna/allay-template/commit/59577c29369ed26e517a7aa5f638c791ae7cf023))
* add internationalization support with i18next and localization ([f8b8b6f](https://github.com/RanielliMontagna/allay-template/commit/f8b8b6f2eb9e931707f79f7d4ecab55514ee138f))
* add useNetInfo hook and integrate NetInfo ([0ea002a](https://github.com/RanielliMontagna/allay-template/commit/0ea002adf1c48925d1d192d407d0c8fc9664948a))
* enhance testing utilities and add tests for useQuery  and home ([b59f412](https://github.com/RanielliMontagna/allay-template/commit/b59f4122c3c6ad976d5354f07fed6ad641dd7621))
* integrate React Query for data fetching and state management ([d0ae382](https://github.com/RanielliMontagna/allay-template/commit/d0ae3824b8fb68963b25f1c1ee527eaac97d7a89))
* refactor testing utilities and add tests in loading component ([f8693e4](https://github.com/RanielliMontagna/allay-template/commit/f8693e4e3bd5a31741d3ef3b43410a9ffe44a96f))

## [1.1.0](https://github.com/RanielliMontagna/allay-template/compare/v1.0.0...v1.1.0) (2025-05-20)


### Features

* add dayjs library for date manipulation and localization ([b6dc740](https://github.com/RanielliMontagna/allay-template/commit/b6dc740e724d82f8eeb1a80d7d70b776aff4cb4b))
* add Sentry integration and environment variable validation ([bc147b3](https://github.com/RanielliMontagna/allay-template/commit/bc147b30e866223512a678c617154d0b36028cba))
* implement theme toggling and loading indicator ([da4413c](https://github.com/RanielliMontagna/allay-template/commit/da4413c2cd51fa7a569b708a26feda325de46f1e))
* improve theme ([be62397](https://github.com/RanielliMontagna/allay-template/commit/be6239708c791e8c344fc3a14c2bf6ef824d10e8))
* refactor configuration structure ([1a44b7c](https://github.com/RanielliMontagna/allay-template/commit/1a44b7cbc3a12adbfc003b35ab222a1bcf245511))

## 1.0.0 (2025-05-05)


### Features

* add CI workflow for linting and testing ([46bd603](https://github.com/RanielliMontagna/allay-template/commit/46bd603206144659e60c754d7ad91518b3592b88))
* add CI workflow for release automation ([e8d6ef8](https://github.com/RanielliMontagna/allay-template/commit/e8d6ef82d592a478834c5104c7e26589c3a02752))
* add CI workflow for release automation ([78ceea8](https://github.com/RanielliMontagna/allay-template/commit/78ceea8581973701f03dd8f3c495eedbcae15307))
* add commit lint ([d67fcfb](https://github.com/RanielliMontagna/allay-template/commit/d67fcfb50383128c4f7dbf74b9487deeebc43bc9))
* add eslint ([21cd0f4](https://github.com/RanielliMontagna/allay-template/commit/21cd0f4763804f36da208a166fca5099d4c9e8de))
* add husky pre-commit hook and update package.json ([16b1b2b](https://github.com/RanielliMontagna/allay-template/commit/16b1b2b0a88ef7e332efb61b323c7ae1bd6a9cca))
* add initial README.md with project setup and guidelines ([3fc463e](https://github.com/RanielliMontagna/allay-template/commit/3fc463e3055b0a38ab9bb30d856c24b0cc259db5))
* add jest ([d655dd8](https://github.com/RanielliMontagna/allay-template/commit/d655dd8747cd283b4006293fdc33a7267a1ff1db))
* add navigation ([b5e61ad](https://github.com/RanielliMontagna/allay-template/commit/b5e61ad1721ca3d3446680492f2575a53786817e))
* initialize app with basic structure and TypeScript configuration ([757411e](https://github.com/RanielliMontagna/allay-template/commit/757411e4aec149fcf7c7cc5d68c1315fa01a0b3c))
* integrate emotion for theming and add default themes ([01bfdd8](https://github.com/RanielliMontagna/allay-template/commit/01bfdd885314e54dd8933b7ad62ba7cff6d9e0c3))


### Bug Fixes

* correct Prettier configuration syntax and update import path for App component ([dd12a3b](https://github.com/RanielliMontagna/allay-template/commit/dd12a3b187f619cd29294721d341e62f7ffaaddb))
