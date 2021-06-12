import React, { useState, useEffect } from 'react'
import { Item } from 'semantic-ui-react'
import JobPositionService from '../services/jobPositionService'

export default function JobPositionList() {

    const [jobPositions, setJobPositions] = useState([])

    useEffect(() => {
        let jobPositionService = new JobPositionService()
        jobPositionService.getAll()
        .then(result => setJobPositions(result.data.data))
        .catch(result => console.log(result.Error))
    },[])

    return (
        <div>
            <Item.Group divided>
                {
                    jobPositions.map((jobPosition) => (
                        <Item key={jobPosition.id}>
                            <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                            <Item.Content verticalAlign='middle'>{jobPosition.title}</Item.Content>
                        </Item>
                    ))
                }

            </Item.Group>
        </div>
    )
}
