import React from 'react'
import {ProjectsList} from '../data/projects'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Columns from 'react-columns'


export const Projects = () => {
    const Projects =ProjectsList.map(project => {
        
        return (
            <div >
                <CardDeck>
                    <Card
                        bg="light"
                        text={"blue"}
                        className="text-center"
                        style={{ margin: "20px" }}>
                        <Card.Body>
                            <div>
                                <Card.Img variant="top" src={project.image} fluid className="image-card"/>
                            </div>
                            
                            <Card.Title>
                                <a href={project.url}>
                                <span className="contactText text-center">{project.title}</span></a>
                            </Card.Title>
                            <Card.Text>{project.description}</Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </div>
        )
    })
    

    return (
        <div className="projects-card" >
            <Columns>
                {Projects}
            </Columns>
                
        </div>
    )
}

