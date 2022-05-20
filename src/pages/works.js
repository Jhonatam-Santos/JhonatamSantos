import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import thumb1 from '../public/images/works/inkdrop_01.png'

const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading as='h3' fontSize={20} mb={4}>
                    works
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem
                            id='TCC'
                            title='Projeto de TCC (IFS)'
                            thumbnail={thumb1}
                        >
                            Projeto para determinar a massa específica de grãos (em desenvolvimento).
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem
                            id='TCC'
                            title='Projeto de TCC (IFS)'
                            thumbnail={thumb1}
                        >
                            Projeto para determinar a massa específica de grãos (em desenvolvimento).
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem
                            id='TCC'
                            title='Projeto de TCC (IFS)'
                            thumbnail={thumb1}
                        >
                            Projeto para determinar a massa específica de grãos (em desenvolvimento).
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem
                            id='TCC'
                            title='Projeto de TCC (IFS)'
                            thumbnail={thumb1}
                        >
                            Projeto para determinar a massa específica de grãos (em desenvolvimento).
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem
                            id='TCC'
                            title='Projeto de TCC (IFS)'
                            thumbnail={thumb1}
                        >
                            Projeto para determinar a massa específica de grãos (em desenvolvimento).
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works