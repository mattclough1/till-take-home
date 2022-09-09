# Matt Clough Till Take-home Test

## Running the app
1. Ensure you have [installed Yarn](https://classic.yarnpkg.com/lang/en/docs/install).
2. From the root of the project directory, run `yarn` to install dependencies.
3. Make sure you have nothing actively running on ports 3000 or 3001. These will be needed for the app dev server and the data API server respectively.
3. Once the dependencies have finished installing, run `yarn start` to start the development server and the API server. Your preferred browser should automatically open to `http://localhost:3000`, but if it doesn't, navigate to that address to see the app running.

## Project structure
This section will outline each folder in the project structure. It's worth mentioning that this project uses a barrel export convention, meaning each directory has a single `index.ts` file that exports all modules within that directory so that nested exports can be imported directly from the top-level directory path.

### `/public`
The dev server serves static assets from this folder. Everything in this folder is currently what is bootstrapped by default by create-react-app and isn't being used in this test app. Documentation for the use of this folder can be found [here](https://create-react-app.dev/docs/using-the-public-folder/)

### `/src`
The main app source file directory. All files needed to build the SPA itself are in this folder

### `/src/components`
All React components are organized in this folder and organized into three categories based on granularity.

- `atoms` - the smallest component unit, very often a single styled component or a minimally abstracted styled component.
- `molecules` - small components built from several atoms. These tend to be the main bulding blocks of the UI
- `organisms` - components that are comprised of several molecules, or atoms, and tend to include a bit more logic, or occupy more space on the screen as a larger piece of UI

### `/src/HOCs`
Higher-order components, or functions that wrap other components and return an augmented version of the wrapped component.

### `/src/styles`
Files related to the design system, mostly small variable definitions at the moment.

### `/src/utils`
Utility functions

## Room for improvement
1. Could use a few more tests, specifically an integration test mocking the API call using something like mock-service-worker
2. Design system needs more responsive styles, particularly the type scale and spacing units/props.
3. Following the above point, the design is pretty bland right now. It's concise but bland.
4. On the note of delighting the user, this UI could use a little more flair, some slight animation, etc. There's not a lot of room on a UI like this for micro-interactions for a few reasons: a) there aren't any interactive elements here yet and b) UIs with dense data displays can't afford much in the way of micro-interactions at the risk of confusing the user. For example, hover states on tabular data rows; they look fun, but they also indicate an opportunity for user action (which there isn't here), or significance of specific pieces of data (which there isn't here). If I were to continue on, I would probably add some placehodler rows for elements that require fetched data, and some subtle fly-in animations for elements: the header, the transaction rows, etc, once the data has been fetched and the UI is populated.