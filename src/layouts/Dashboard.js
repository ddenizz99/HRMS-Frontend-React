import React from 'react'
import JobPositionList from '../pages/JobPositionList'
import JobAdvertisementList from '../pages/JobAdvertisementList'
import JobAdvertisement from '../pages/JobAdvertisement'
import Categories from './Categories'
import { Grid } from 'semantic-ui-react'
import { Route } from 'react-router'
import JobAdvertisementAdd from '../pages/JobAdvertisementAdd'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
                        <Route path="/jobpositions" component={JobPositionList}/>
                        <Route exact path="/jobadvertisement/:id" component={JobAdvertisement}/>
                        <Route exact path="/add-jobadvertisement" component={JobAdvertisementAdd}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <ToastContainer/>
        </div>
    )
}
