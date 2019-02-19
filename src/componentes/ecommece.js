import React, { Component } from 'react'
import { Card, CardActionArea, CardMedia, CardContent, CardActions } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const cursos = [
    {
        id: 1,
        nome: "Qlik",
        descricao: "No primeiro projeto veremos o básico da ferramenta. Desde conceitos de Business Intelligence e levantamento do projeto, passaremos pela extração de dados, transformação e criação de painéis e análises para seu cliente. 4 Horas de aula ao dia, durante uma semana",
        introducao: "A free data visualization and discovery tool that lets you analyze data easily and make business decisions fast.",
        tempo: "20 horas de curso",
        preco: "R$ 3.400",
        parcelas: "Até 4x sem juros",
        imagem: 'https://webapps.qlik.com/WarsawMarathon/qlik.jpg',

    },
    {
        id: 2,
        nome: "Power BI",
        descricao: "In this course, Getting Started with Power BI, you will gain a fundamental understanding of the capabilities of Power BI. You'll start out with seeing how you can quickly and easily gather data from a variety of sources, and then cleanse and transform that data with just a few clicks. Next, you'll also learn how you can enhance the results by integrating disparate data sources and adding simple calculations. Then, you'll learn how to explore your data with visualizations and simple dashboards. Finally, you'll learn what steps are necessary to keep your data up-to-date. By the end of this course, you'll have a firm understanding of the basic skills required for using Power BI to acquire and transform data, enhance the data for analysis, and produce reports and dashboards.",
        introducao: "O Power BI, desenvolvido pela Microsoft, é uma solução de análise de negócios que permite que você consolide seus dados, crie relatório gerenciais interativos e atraentes para facilitar a organização nas tomadas de decisão do dia-a-dia do negócio.",
        tempo: "20 horas de curso",
        preco: "R$ 3.000",
        parcelas: "Até 4x sem juros",
        imagem: 'https://webapps.qlik.com/WarsawMarathon/qlik.jpg',

    },
    {
        id: 3,
        nome: "Information Desing",
        descricao: "Information design is the practice of presenting information in a way that makes it most accessible and easily understood by users. Information design is targeted to specific audiences in specific situations to meet defined objectives. In its most sophisticated forms, it helps users understand complex data by organizing and simplifying data and information in ways they can quickly grasp",
        introducao: "Design de informação ou infodesign, é uma área do design gráfico que lida detalhadamente com o projeto da informação visual.",
        tempo: "20 horas de curso",
        preco: "R$ 1.400",
        parcelas: "Até 4x sem juros",
        imagem: 'https://webapps.qlik.com/WarsawMarathon/qlik.jpg',

    },
    // {
    //     id: 4,
    //     nome: "Python",
    //     descricao: "Web2py é um framework web gratuito e open-source criado para desenvolvimento ágil de aplicações web baseadas em banco de dados seguros; ele é escrito em Python e programável em Python. web2py é um framework full-stack, o que significa que ele contém todos os componentes que você precisa para construir aplicações web completamente funcionais.",
    //     introducao: "A comunidade Python Brasil reune grupos de usuários em todo o Brasil interessados em difundir e divulgar a linguagem de programação.",
    //     tempo: "20 horas de curso",
    //     preco: "R$ 2.400",
    //     parcelas: "Até 4x sem juros",
    //     imagem: 'https://webapps.qlik.com/WarsawMarathon/qlik.jpg',

    // },
    // {
    //     id: 5,
    //     nome: "Machine learning",
    //     descricao: "Graças às novas tecnologias computacionais, o machine learning de hoje não é como o machine learning do passado. Ele nasceu do reconhecimento de padrões e da teoria de que computadores podem aprender sem serem programados para realizar tarefas específicas; pesquisadores interessados em inteligência artificial queriam saber se as máquinas poderiam aprender com dados. O aspecto iterativo do aprendizado de máquina é importante porque, quando os modelos são expostos a novos dados, eles são capazes de se adaptar independentemente. Eles aprendem com computações anteriores para produzir decisões e resultados confiáveis, passíveis de repetição. Isso não é uma ciência nova – mas uma ciência que está ganhando um novo impulso.",
    //     introducao: "O aprendizado de máquina (em inglês, machine learning) é um método de análise de dados que automatiza a construção de modelos analíticos.",
    //     tempo: "20 horas de curso",
    //     preco: "R$ 3.400",
    //     parcelas: "Até 4x sem juros",
    //     imagem: 'https://webapps.qlik.com/WarsawMarathon/qlik.jpg',

    // },
];

class Ecommece extends Component {
    render() {
        return (
            <div>
                <div id='pricing' className='container-fluid'>
                    <div className='row '>
                        {cursos.map((item) => (

                            <div className='col-sm-4 col-xs-12'>
                                <Card className="">
                                    <CardActionArea>
                                        <CardMedia
                                            className=""
                                            image={item.imagem}
                                            title={item.nome}
                                        />

                                        <CardContent>
                                            <Typography variant="body1">
                                                {item.introducao}
                                            </Typography>
                                            <Typography gutterBottom variant="subtitle2" component="h2">
                                                {item.tempo}
                                            </Typography>
                                            <Typography gutterBottom variant="h6" component="h2">
                                                {item.preco}
                                            </Typography>
                                            <Typography gutterBottom variant="caption" component="h2">
                                                {item.parcelas}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            Share
                                    </Button>
                                    </CardActions>
                                </Card>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        )
    }

}

export default Ecommece

