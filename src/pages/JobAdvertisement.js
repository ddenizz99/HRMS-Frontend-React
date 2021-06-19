import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import JobAdvertisementService from '../services/jobAdvertisementService'
import { Divider, Header, Icon, Table } from 'semantic-ui-react'

export default function JobAdvertisement() {

    let {id} = useParams();

    const [jobAdvertisement, setJobAdvertisement] = useState({})

    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.getById(id)
        .then(result => setJobAdvertisement(result.data.data))
        .catch(result => console.log(result))
    },[])
    
    return (
        <div>
            <Divider horizontal>
            <Header as='h4'>
                <Icon name='tag' />
                {jobAdvertisement.jobPosition?.title}
            </Header>
            </Divider>

            <p>
            {jobAdvertisement.jobDescription}
            </p>

            <Divider horizontal>
            <Header as='h4'>
                <Icon name='bar chart' />
                {jobAdvertisement.employer?.companyName}
            </Header>
            </Divider>

            <Table definition>
            <Table.Body>
                <Table.Row>
                <Table.Cell width={2}>Maaş Min.</Table.Cell>
                <Table.Cell>{jobAdvertisement.salaryScaleMin}</Table.Cell>
                </Table.Row>
                <Table.Row>
                <Table.Cell>Maaş Max.</Table.Cell>
                <Table.Cell>{jobAdvertisement.salaryScaleMax}</Table.Cell>
                </Table.Row>
                <Table.Row>
                <Table.Cell>Açık Pozisyon</Table.Cell>
                <Table.Cell>{jobAdvertisement.numberOfOpenPositions}</Table.Cell>
                </Table.Row>
                <Table.Row>
                <Table.Cell>Şehir</Table.Cell>
                <Table.Cell>{jobAdvertisement.city?.title}</Table.Cell>
                </Table.Row>
                <Table.Row>
                <Table.Cell>Son Başvuru Tarihi</Table.Cell>
                <Table.Cell>{jobAdvertisement.applicationDeadline}</Table.Cell>
                </Table.Row>
                <Table.Row>
                <Table.Cell>İlan Yayın Tarihi</Table.Cell>
                <Table.Cell>{jobAdvertisement.releaseDate}</Table.Cell>
                </Table.Row>
            </Table.Body>
            </Table>
        </div>
    )
}
