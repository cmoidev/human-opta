Inspired by [Opta's Football Predictions](https://theanalyst.com/articles/opta-football-predictions) and [this](https://github.com/BelNaruto/English-Premier-League-API) api
The purpose of this app is to create a place where one can determine where they believe each team in a respective league will end up

Accessibility
- on tabbing you should be able to tab through the teams
- when you're on a team, using the up and down arrow keys you can update the team's position

Internationalization?

Things I want to do:

- Track standings over a season
- Show minimal stats/info for each team
- Be mindful of leagues that experience relegation/promotions? Perhaps we ignore promotions initially and only focus on the top flight per country
- Create a "season simulation" based on collated responses

Components: dropdown, grid for league table
Technologies/Libraries to look into: 
- BetterAuth, Clerk, workos
- Tailwind + ShadCn
- Posthog for analytics
- bun over pnpm?
- Vercel
- something for captcha/rate limiting: botid, turnstyle, hCaptcha, arcjet
- stripe-recommendations->t3dotgg
- React Native + Expo
- CodeRabbit
- DB: MySQL or Postgres
- API: trpc, orpc
- DB host: PlanetScale