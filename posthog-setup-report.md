<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the Lingo AI Expo app. The SDK (`posthog-react-native`) was installed alongside its required peer dependencies. A centralized PostHog client (`src/lib/posthog.ts`) was created using `expo-constants` to read configuration from `app.config.js` extras, which in turn reads from environment variables. The root layout (`src/app/_layout.tsx`) was updated to wrap the app in `PostHogProvider` with autocapture for touches and manual screen tracking via `usePathname`. Seven events were instrumented across five files covering the key user journeys: onboarding, authentication (email and social), language selection, and lesson plan engagement.

| Event Name | Description | File |
|---|---|---|
| `onboarding_started` | User tapped 'Get Started' on the onboarding screen to begin the sign-up flow. | `src/app/onboarding.tsx` |
| `user_signed_up` | User successfully created an account and verified their email. | `src/app/(auth)/sign-up.tsx` |
| `user_signed_in` | User successfully signed in with their email code or via social provider. | `src/app/(auth)/sign-in.tsx`, `src/hooks/useSocialAuth.ts` |
| `social_auth_started` | User initiated authentication via a social provider (Google, Facebook, or Apple). | `src/hooks/useSocialAuth.ts` |
| `language_selected` | User confirmed their target language selection. | `src/app/language-selection.tsx` |
| `lesson_plan_item_completed` | User marked a today's plan item as completed, earning XP. | `src/app/(tabs)/home.tsx` |
| `continue_learning_tapped` | User tapped the 'Continue Learning' card on the home screen. | `src/app/(tabs)/home.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics (wizard) dashboard](https://us.posthog.com/project/518886/dashboard/1870670)
- [User Acquisition Funnel (wizard)](https://us.posthog.com/project/518886/insights/lBojZbvg)
- [Daily Sign-ins (wizard)](https://us.posthog.com/project/518886/insights/ohZzqY9u)
- [Language Selections by Language (wizard)](https://us.posthog.com/project/518886/insights/dW690DVp)
- [Lesson Plan Completions (wizard)](https://us.posthog.com/project/518886/insights/XaG6zy4O)

## Verify before merging

- [ ] Run a full production build (the wizard only verified the files it touched) and fix any lint or type errors introduced by the generated code.
- [ ] Run the test suite — call sites that were rewritten or instrumented may need updated mocks or fixtures.
- [ ] Add `POSTHOG_PROJECT_TOKEN` and `POSTHOG_HOST` to `.env.example` and any onboarding docs so collaborators know what to set.
- [ ] Confirm the returning-visitor path also calls `identify` — the current implementation calls `identify` only at sign-in/sign-up. If a user reopens the app while still signed in via Clerk, their session will be anonymous until they sign in again. Consider calling `posthog.identify(user.primaryEmailAddress?.emailAddress)` in a `useEffect` on the home screen using the Clerk `useUser()` hook.

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
