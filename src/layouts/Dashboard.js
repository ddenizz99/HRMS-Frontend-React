import React from 'react'
import JobPositionList from '../pages/JobPositionList'
import JobAdvertisementList from '../pages/JobAdvertisementList'
import JobAdvertisement from '../pages/JobAdvertisement'
import Categories from './Categories'
import { Grid } from 'semantic-ui-react'
import { Route } from 'react-router'

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column mobile={16} tablet={6} computer={4}>
                        <Categories/>
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={10} computer={12}>
                        <Route exact path="/" component={JobAdvertisementList}/>
                        <Route exact path="/jobpositions" component={JobPositionList}/>
                        <Route exact path="/jobadvertisement/:id" component={JobAdvertisement}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
