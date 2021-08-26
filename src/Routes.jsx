import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

import { LoadingScreen } from 'elements'

function Routes() {

    const Clients = lazy(() => import('pages/Clients'))
    const Debts = lazy(() => import('pages/Debts'))

    return (
        <Suspense fallback={<LoadingScreen />}>
            <Switch>

                <Route path="/dividas">
                    <Debts />
                </Route>

                <Route path="/">
                    <Clients />
                </Route>

            </Switch>
        </Suspense>
    )

}

export default Routes