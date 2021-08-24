import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

import { LoadingScreen } from 'elements'

function Routes() {

    const Home = lazy(() => import('pages/Home'))
    const About = lazy(() => import('pages/About'))

    return (
        <Suspense fallback={<LoadingScreen />}>
            <Switch>

                <Route path="/about">
                    <About />
                </Route>

                <Route path="/">
                    <Home />
                </Route>

            </Switch>
        </Suspense>
    )

}

export default Routes