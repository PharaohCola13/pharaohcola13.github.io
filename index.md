<body id="top" data-spy="scroll" data-target="#navbar-main" class="dark" data-offset="71">
    <nav class="navbar navbar-expand-lg navbar-dark compensate-for-scrollbar" id="navbar-main">
        <div class="container">
            <div class="d-none d-lg-inline-flex">
                <a class="navbar-brand" href=".">{{site.data.content.name}}</a>
            </div>
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbar-content" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span>
                    <i class="fas fa-bars"></i>
                </span>
            </button>
            <div class="navbar-brand-mobile-wrapper d-inline-flex d-lg-none">
                <a class="navbar-brand" href=".">S. Riley</a>
            </div>
            <div class="navbar-collapse main-menu-item collapse justify-content-start" id="navbar-content">
                <ul class="navbar-nav d-md-inline-flex">
                    <li class="nav-item">
                        <a class="nav-link " href="#experience" data-target="#experience">
                            <span>Work History</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="#projects" data-target="#projects">
                            <span>Projects</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="#papers" data-target="#papers">
                            <span>Papers</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="#conferences" data-target="#conferences">
                            <span>Conferences</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <span class="js-widget-page d-none"></span>
    <div id="main" role="main">
        <section id="about" class="home-section wg-about">
            <div class="container">
                <div class="row" itemprop="author" itemscope itemtype="http://schema.org/Person" itemref="person-email person-telephone person-address">
                    <div class="col-12 col-lg-4">
                        <div id="profile">
                            <img class="portrait" src="{{site.data.content.profile}}">
                            <div class="portrait-title">
                                <h2>{{site.data.content.name}}</h2>
                                <h3>{{site.data.content.role}}</h3>
                                <h3 itemprop="worksFor" itemscope itemtype="http://schema.org/Organization">
                                    <span>{{site.data.content.place}}</span>
                                </h3>
                            </div>
                            <ul class="network-icon" aria-hidden="true">
                                <li>
                                    <a itemprop="sameAs" target="_blank" href="mailto:me@sriley.dev">
                                        <i class="fas fa-envelope big-icon" id="mail"></i>
                                    </a>
                                </li>
                                <li>
                                    <a itemprop="sameAs" target="_blank" href="https://github.sriley.dev" rel="noopener">
                                        <i class="fab fa-github big-icon" id="git"></i>
                                    </a>
                                </li>
                                <li>
                                    <a itemprop="sameAs" target="_blank" href="https://orcid.org/0000-0001-7949-9163" rel="noopener">
                                        <i class="ai ai-orcid big-icon" id="orcid"></i>
                                    </a>
                                </li>
                                <li>
                                    <a itemprop="sameAs" target="_blank" href="https://rgate.sriley.dev" rel="noopener">
                                        <i class="ai ai-researchgate big-icon" id="rgate"></i>
                                    </a>
                                </li>
                            </ul>
                            <br>
                            <ul class="network-icon" aria-hidden="true" style="margin-top: -10px">
                                <li>
                                    <a itemprop="sameAs" target="_blank" href="https://cv.sriley.dev" rel="noopener">
                                        <i class="fas fa-file-pdf big-icon"></i>
                                    </a>
                                </li>
                                <li>
                                    <a itemprop="sameAs" target="_blank" href="https://board.sriley.dev">
                                        <div>
                                            <i class="fab fa-trello big-icon"></i>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-12 col-lg-8" itemprop="description">
                        <h1>Biography</h1><hr>
                        <p>{{site.data.content.biography.description}}</p>
                        <div class="row">
                            <div class="col-md-5">
                                <h3>Interests</h3>
                                <ul class="ul-interests">
                                    {% for items in site.data.content.biography.interests %}
                                        <li>{{ items.item }}<li>
                                    {% endfor %}
                                </ul>
                            </div>
                            <div class="col-md-7">
                                <h3>Education</h3>
                                <ul class="ul-edu fa-ul">
                                    <li id="edu-history"></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="skills" class="home-section wg-featurette">
            <div class="container">
                <div class="row featurette">
                    <div class="col-md-12 section-heading">
                        <h1>Development Experience</h1><hr/>
                    </div>
                    <div id="skill"></div>
                </div>
            </div>
        </section>
        <section id="experience" class="home-section wg-experience">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-md-4 section-heading">
                        <h1>Work History</h1><hr/>
                    </div>
                    {% for job in site.data.content.workhistory %} 
                    <div class="col-12 col-lg-8">
                        <div class="row experience">
                            <div class="col py-2">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="card-title exp-title text-muted mt-0 mb-1">
                                            {{job.title}}
                                        </h4>
                                        <h4 class="card-title exp-company text-muted my-0">
                                            {{job.place}}</h4>
                                        <div class="text-muted exp-meta">
                                            {{job.start}} -- {{job.end}}
                                            <span class='middot-divider'></span> 
                                            {{job.city}},{{job.state}}
                                        </div>
                                        <div class="col-auto text-center flex-column d-none d-sm-flex">
                                            {{job.description}}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {% endfor %}
                </div>
            </div>
        </section>
        <section id="projects" class="home-section wg-portfolio">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-md-4 section-heading">
                        <h1>Projects</h1><hr/>
                    </div>
                    <div class="col-12 col-lg-8">
                        <div class="isotope projects-container js-layout-masonry" style="top: 0px; height: 600px;">
                            <div id="carousel-proj" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner" id="projs" style="top: 0px; position: absolute;"></div>
                            </div>
                                <ol class="carousel-indicators" id="carousel-tabs"></ol>
                                <a class="carousel-control-prev" data-target="#carousel-proj" role="button" data-slide="prev">
                                  <span class="carousel-control-prev-icon"></span>
                                </a>
                                <a class="carousel-control-next" data-target="#carousel-proj" role="button" data-slide="next">
                                  <span class="carousel-control-next-icon"></span>
                                </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="papers" class="home-section wg-featured">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-md-4 section-heading">
                        <h1>Papers</h1><hr/>
                    </div>
                    <div class="col-12 col-lg-8" id="paper"></div>
                </div>
            </div>
        </section>
        <section id="conferences" class="home-section wg-featured">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-md-4 section-heading">
                        <h1>Conferences</h1><hr/>
                    </div>
                    <div class="col-12 col-lg-8">
                        <div class="isotope projects-container js-layout-masonry" style="top: 0px; height: 1050px;">
                            <div id="carousel-conf" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner" id="conference" style="top: 0px; position: absolute;"></div>
                            </div>
                                <ol class="carousel-indicators" id="carousel-tabs1"></ol>
                                <a class="carousel-control-prev" data-target="#carousel-conf" role="button" data-slide="prev">
                                  <span class="carousel-control-prev-icon"></span>
                                </a>
                                <a class="carousel-control-next" data-target="#carousel-conf" role="button" data-slide="next">
                                  <span class="carousel-control-next-icon"></span>
                                </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</body>
