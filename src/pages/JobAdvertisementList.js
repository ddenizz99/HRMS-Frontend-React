import React, { useState, useEffect } from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import JobAdvertisementService from '../services/jobAdvertisementService'
import { Link } from "react-router-dom";

export default function JobAdvertisementList() {

    const [jobAdvertisements, setJobAdvertisements] = useState([])

    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.getActiveJobPostings()
        .then(result => setJobAdvertisements(result.data.data))
        .catch(result => console.log(result))
    },[])

    const images = [
            'https://react.semantic-ui.com/images/avatar/large/steve.jpg',
            'https://react.semantic-ui.com/images/avatar/large/molly.png',
            'https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
    ];

    return (
        <div>
            <Card.Group>
                {
                    jobAdvertisements.map((jobAdvertisement) => (
                        <Card key={jobAdvertisement.id}>
                            <Card.Content>
                                <Image
                                floated='right'
                                size='mini'
                                src={images[Math.floor(Math.random() * images.length)]}
                                />
                                <Card.Header>{jobAdvertisement.jopPositionTitle}</Card.Header>
                                <Card.Meta>{jobAdvertisement.companyName}</Card.Meta>
                                <Card.Description>
                                <strong>Açık Pozisyon</strong> : {jobAdvertisement.numberOfOpenPositions}
                                <br/>
                                <strong>Yayınlama Tarihi</strong> : {jobAdvertisement.releaseDate}
                                <br/>
                                <strong>Son Başvuru Tarihi</strong> : {jobAdvertisement.applicationDeadline}
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <div>
                                    <Link className='ui two buttons' to={`/jobadvertisement/${jobAdvertisement.id}`}>
                                        <Button basic color='green'>
                                            Detaylı İncele
                                        </Button>
                                    </Link>
                                </div>
                            </Card.Content>
                        </Card>
                    ))
                }
            </Card.Group>
        </div>
    )
}
