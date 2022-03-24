import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import ensaioThumb1 from '../public/images/works/ensaio1.png'
import ensaioThumb2 from '../public/images/works/ensaio2.png'
import ensaioThumb3 from '../public/images/works/ensaio3.png'

const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading as='h3' fontSize={20} mb={4}>
                    Trabalhos
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem
                            id='instagram'
                            title='Exemplo 1'
                            thumbnail={ensaioThumb1}
                        >
                            Ensaio de pessoa x em Aracaju
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem
                            id='instagram'
                            title='Exemplo 2'
                            thumbnail={ensaioThumb2}
                        >
                            Ensaio de pessoa x em Aracaju
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem
                            id='instagram'
                            title='Exemplo 3'
                            thumbnail={ensaioThumb3}
                        >
                            Ensaio de pessoa x em Aracaju
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works
