import React from 'react'
import { Card, CardBody, CardHeader, CardImg, Col, Container, Row } from 'reactstrap'
import './content.css'
import content1 from '../../images/content1.jpg'
import news from '../../images/telegramreklama.jpg'
import { Link } from 'react-router-dom'
import { CardContent } from '@mui/material'
export default function Content() {
    return (
        <>
             <Container fluid={true} className="content">
                    <Row>
                        <Col className="col-lg-4 col-md-4 col-sm-12">
                          <h2 className="text-light">Samarqand viloyati  Samarqand tumani 33-ixtisoslashtirgan Davlat umumiy o'rta ta'lim maktabi</h2>
                          <button className="btn-primary btn text-light">Biz bilan bog'laning</button>
                        </Col>
                        <Col className="col-lg-8 col-md-8 col-sm-12">
                                <div className="content1 ">
                                    <img className="img-fluid" src={content1}/>
                                </div>
                        </Col>
                    </Row>
             </Container>
             <Container className="container-fluid pt-5 contentTwo">
                <Row>
                        <Col className="col-lg-4 col-md-4 col-sm-12 col-12">
                                <Card>
                                        <CardBody>
                                        <img className="img-fluid" src={content1}/>
                                        <CardContent>
                                        <h4>Yangiliklar</h4>
                                            <p>Maktabimizga doir bo'lgan yangiliklardan xabardor bo'ling</p>
                                            <button className="btn"><Link to="/yangiliklar">Sahifaga o'tish</Link></button>
                                        </CardContent>
                                        </CardBody>
                                        
                                </Card>
                            </Col>
                            <Col className="col-lg-4 col-md-4 col-sm-12 col-12">
                                <Card>
                                    <CardBody>
                                    <img className="img-fluid" src={content1}/>
                                    <CardContent>
                                        <h4>Fotolavhalar</h4>
                                        <p>Maktabimizga doir bo'lgan yangiliklardan xabardor bo'ling</p>
                                        <button className="btn"><Link to="/Yutuqlarimiz">Sahifaga o'tish</Link></button>
                                        </CardContent>                        
                                    </CardBody>
                                    
                                </Card>
                            </Col>
                            <Col className="col-lg-4 col-md-4 col-sm-12 col-12">
                                <Card>
                                    <CardBody>
                                    <img className="img-fluid" src={content1}/>
                                    <CardContent>

                                        <h4>Yutuqlarimiz</h4>
                                        <p>Maktabimizga doir bo'lgan yangiliklardan xabardor bo'ling</p>
                                        <button className="btn" ><Link to="/gallery/">Sahifaga o'tish</Link></button>
                                    </CardContent>
                                    </CardBody>
                                </Card>
                            </Col>
                </Row>
             </Container>
             <Container fluid={true} className="news-row">
               <Row className="virtual-tour news mb-3">
                    <Col className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div>
                            bu yerga react-vr quyiladi
                        </div>
                    </Col>
                    <Col className="col-lg-3 col-md-3 col-sm-12 col-12">
                        <div className="newsToday" >
                                <div className="left">
                                        <h6>Telegram'ни блоклашга уриниш: 
                                        Обрўси тўкилган ҳукумат, қовун туширган вазирлик ва ишдан кетган уч амалдор
                                        </h6>
                                    <div className="description">
                                    <span>Кеча, 3 ноябрь куни интернетнинг ўзбек сегментини “портлатган” жуда қизиқ воқеалар бўлиб ўтди. Бир неча соат давомида интернетдан хабар олмаганлар эса нима бўлганини тушунмай ҳам қолди. Келинг, ҳаммасини бир бошдан гапириб берамиз, борича…</span>
                                    </div>
                                    <button className="btn btn-success"><Link>Batafsil</Link></button> 
                                </div>
                                <div className="right">
                                    <CardImg src={content1}></CardImg>
                                </div>
                                <div className="clear"></div>
                               
                          
                        </div>
                        <div className="newsToday" >
                                <div className="left">
                                        <h6>Telegram'ни блоклашга уриниш: 
                                        Обрўси тўкилган ҳукумат, қовун туширган вазирлик ва ишдан кетган уч амалдор
                                        </h6>
                                    <div className="description">
                                    <span>Кеча, 3 ноябрь куни интернетнинг ўзбек сегментини “портлатган” жуда қизиқ воқеалар бўлиб ўтди. Бир неча соат давомида интернетдан хабар олмаганлар эса нима бўлганини тушунмай ҳам қолди. Келинг, ҳаммасини бир бошдан гапириб берамиз, борича…</span>
                                    </div>
                                    <button className="btn btn-success"><Link>Batafsil</Link></button> 
                                </div>
                                <div className="right">
                                    <CardImg src={news}></CardImg>
                                </div>
                                <div className="clear"></div>
                               
                          
                        </div>
                        <div className="newsToday" >
                                <div className="left">
                                        <h6>Telegram'ни блоклашга уриниш: 
                                        Обрўси тўкилган ҳукумат, қовун туширган вазирлик ва ишдан кетган уч амалдор
                                        </h6>
                                    <div className="description">
                                    <span>Кеча, 3 ноябрь куни интернетнинг ўзбек сегментини “портлатган” жуда қизиқ воқеалар бўлиб ўтди. Бир неча соат давомида интернетдан хабар олмаганлар эса нима бўлганини тушунмай ҳам қолди. Келинг, ҳаммасини бир бошдан гапириб берамиз, борича…</span>
                                    </div>
                                    <button className="btn btn-success"><Link>Batafsil</Link></button> 
                                </div>
                                <div className="right">
                                    <CardImg src={news}></CardImg>
                                </div>
                                <div className="clear"></div>
                               
                          
                        </div>
                        <div className="newsToday" >
                                <div className="left">
                                        <h6>Telegram'ни блоклашга уриниш: 
                                        Обрўси тўкилган ҳукумат, қовун туширган вазирлик ва ишдан кетган уч амалдор
                                        </h6>
                                    <div className="description">
                                    <span>Кеча, 3 ноябрь куни интернетнинг ўзбек сегментини “портлатган” жуда қизиқ воқеалар бўлиб ўтди. Бир неча соат давомида интернетдан хабар олмаганлар эса нима бўлганини тушунмай ҳам қолди. Келинг, ҳаммасини бир бошдан гапириб берамиз, борича…</span>
                                    </div>
                                    <button className="btn btn-success"><Link>Batafsil</Link></button> 
                                </div>
                                <div className="right">
                                    <CardImg src={news}></CardImg>
                                </div>
                                <div className="clear"></div>
                               
                          
                        </div>
                        <button className="btn btn-ouline-primary seemore"><Link to="/yangiliklar">See more</Link></button>
                    </Col>
                    <Col className="col-lg-3 col-md-3 col-sm-12 col-12">
                        <div className="newsToday" >
                                <div className="left">
                                        <h6>Telegram'ни блоклашга уриниш: 
                                        Обрўси тўкилган ҳукумат, қовун туширган вазирлик ва ишдан кетган уч амалдор
                                        </h6>
                                    <div className="description">
                                    <span>Кеча, 3 ноябрь куни интернетнинг ўзбек сегментини “портлатган” жуда қизиқ воқеалар бўлиб ўтди. Бир неча соат давомида интернетдан хабар олмаганлар эса нима бўлганини тушунмай ҳам қолди. Келинг, ҳаммасини бир бошдан гапириб берамиз, борича…</span>
                                    </div>
                                    <button className="btn btn-success"><Link>Batafsil</Link></button> 
                                </div>
                                <div className="right">
                                    <CardImg src={news}></CardImg>
                                </div>
                                <div className="clear"></div>
                               
                          
                        </div>
                        <div className="newsToday" >
                                <div className="left">
                                        <h6>Telegram'ни блоклашга уриниш: 
                                        Обрўси тўкилган ҳукумат, қовун туширган вазирлик ва ишдан кетган уч амалдор
                                        </h6>
                                    <div className="description">
                                    <span>Кеча, 3 ноябрь куни интернетнинг ўзбек сегментини “портлатган” жуда қизиқ воқеалар бўлиб ўтди. Бир неча соат давомида интернетдан хабар олмаганлар эса нима бўлганини тушунмай ҳам қолди. Келинг, ҳаммасини бир бошдан гапириб берамиз, борича…</span>
                                    </div>
                                    <button className="btn btn-success"><Link>Batafsil</Link></button> 
                                </div>
                                <div className="right">
                                    <CardImg src={news}></CardImg>
                                </div>
                                <div className="clear"></div>
                               
                          
                        </div>
                        <div className="newsToday" >
                                <div className="left">
                                        <h6>Telegram'ни блоклашга уриниш: 
                                        Обрўси тўкилган ҳукумат, қовун туширган вазирлик ва ишдан кетган уч амалдор
                                        </h6>
                                    <div className="description">
                                    <span>Кеча, 3 ноябрь куни интернетнинг ўзбек сегментини “портлатган” жуда қизиқ воқеалар бўлиб ўтди. Бир неча соат давомида интернетдан хабар олмаганлар эса нима бўлганини тушунмай ҳам қолди. Келинг, ҳаммасини бир бошдан гапириб берамиз, борича…</span>
                                    </div>
                                    <button className="btn btn-success"><Link>Batafsil</Link></button> 
                                </div>
                                <div className="right">
                                    <CardImg src={news}></CardImg>
                                </div>
                                <div className="clear"></div>
                               
                          
                        </div>
                        <div className="newsToday" >
                                <div className="left">
                                        <h6>Telegram'ни блоклашга уриниш: 
                                        Обрўси тўкилган ҳукумат, қовун туширган вазирлик ва ишдан кетган уч амалдор
                                        </h6>
                                    <div className="description">
                                    <span>Кеча, 3 ноябрь куни интернетнинг ўзбек сегментини “портлатган” жуда қизиқ воқеалар бўлиб ўтди. Бир неча соат давомида интернетдан хабар олмаганлар эса нима бўлганини тушунмай ҳам қолди. Келинг, ҳаммасини бир бошдан гапириб берамиз, борича…</span>
                                    </div>
                                    <button className="btn btn-success"><Link>Batafsil</Link></button> 
                                </div>
                                <div className="right">
                                    <CardImg src={news}></CardImg>
                                </div>
                                <div className="clear"></div>
                        </div>
                       
                    </Col>
                </Row>
             </Container>
        </>
    )
}
