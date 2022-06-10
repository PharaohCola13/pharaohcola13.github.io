---
title:home
---

<head>
	<link rel="canonical" href="about.html">
	<meta property="og:url" content="about.html">

	<meta property="og:description" content="About me">
	<link rel="icon" href="assets/img/icon.png" type="image/png">

	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/academicons/1.8.6/css/academicons.min.css" crossorigin="anonymous">
	<link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.cyan-indigo.min.css" />
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.12.0/devicon.min.css">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.0/css/all.css" crossorigin="anonymous">
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <meta name="HandheldFriendly" content="True">
	<meta name="MobileOptimized" content="320">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<script src="assets/js/academic.min.js"></script>
	<script type="module" src="assets/js/zero-md.min.js"></script>
	<script>
		document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/g, '') + ' js ';
	</script>
	<script>
        if (document.location.protocol != "https:") {
            document.location = document.URL.replace(/^http:/i, "https:");
        }
	</script>
	<link rel="stylesheet" type="text/css" href="assets/css/about.css">
	<link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css">
</head>
<body id="top" data-spy="scroll" data-target="#navbar-main" class="dark" data-offset="71">
    <nav class="navbar navbar-expand-lg navbar-dark compensate-for-scrollbar" id="navbar-main">
        <div class="container">
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbar-content" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </button>
            <div class="navbar-collapse main-menu-item collapse justify-content-start" id="navbar-content">
                <ul class="navbar-nav d-md-inline-flex">
                    <li class="nav-item">
                        <a class="nav-link" href="#work-history" data-target="#work-history">
                            <span>Work History</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#projects" data-target="#projects">
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
    <div id="main" role="main">
        <section class="home-section">
            <div class="container">
                <div class="row">
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
                    <div class="col-12 col-lg-8">
                        <h1 style="border-bottom: 0; padding-bottom: 0">Biography</h1><hr>
                        <p>{{site.data.content.biography.description}}</p>
                        <div class="row">
                            <h3>Interests</h3>
                            <ul class="ul-interests">
                                {% for items in site.data.content.biography.interests %}
                                    <li>{{ items.item }}</li>
                                {% endfor %}
                            </ul>
                        </div>
                        <div class="row">
                            <h3>Education</h3>
                            <ul class="ul-edu fa-ul">
                                {% for edus in site.data.content.biography.education %}
                                <li>
                                    <i class="fa-li fas fa-graduation-cap"></i>
                                    <div class="description">
                                        <p class="course">
                                             <div>{{edus.degree}}</div>
                                             <div>Focus in {{edus.focus}}<br>Minor in {{edus.minor}}</div>
                                             <div>{{edus.date}}</div>
                                         </p>
                                        <p class="institution">{{edus.place}}</p>
                                    </div>
                                </li>
                                {% endfor %}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="dev" class="home-section">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-4" style="position: relative; z-index:1"></div>
                    <div class="col-12 col-lg-8">
                        <h1  style="border-bottom: 0; padding-bottom: 0">Development Experience</h1><hr>
                        <p>
                        {% for skill in site.data.content.skills %}
                            <span class="mdl-chip mdl-chip--contact" style="height:64px; margin-right: 56px; text-align: left;">
                                <span class="mdl-chip__contact mdl-color-text--white" style="background-color: #be6db6; height:64px; width: 64px; line-height: 4">
                                    <i class="material-icons {{ skill.icon }}" style="color: #23252f; font-size: 35px"></i>
                                </span>
                                <span class="mdl-chip__text" style="font-size: 14px">
                                    {{ skill.name }}
                                </span>
                            </span>
                        {% endfor %}
                    </p>
                    </div>
                </div>
            </div>
        </section>
        <section id="work-history" class="home-section">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-4" style="position: relative; z-index:1"></div>
                    <div class="col-12 col-lg-8">
                        <h1 style="border-bottom: 0; padding-bottom: 0">Work History</h1><hr>
                        <p>
                            {% for job in site.data.content.workhistory %}
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="card-title exp-title mt-0 mb-1" style="color: #FFF">
                                            {{job.title}}
                                        </h4>
                                        <h4 class="card-title exp-company my-0" style="color: #FFF">
                                            {{job.place}}</h4>
                                        <div class="exp-meta" style="color: #FFF">
                                            {{job.start}} -- {{job.end}}
                                            <span class='middot-divider'></span>
                                            {{job.city}}, {{job.state}}
                                        </div>
                                        <div class="col-auto flex-column d-none d-sm-flex" style="color: #FFF">
                                            {{job.description}}
                                        </div>
                                    </div>
                                </div>
                            {% endfor %}
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section id="projects" class="home-section">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-4" style="position: relative; z-index:1"></div>
                    <div class="col-12 col-lg-8">
                        <h1 style="border-bottom: 0; padding-bottom: 0">Projects</h1><hr>
                    </div>
                </div>
            </div>
        </section>
        <section id="papers" class="home-section wg-featured">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-4" style="position: relative; z-index:1"></div>
                    <div class="col-12 col-lg-8">
                        <h1  style="border-bottom: 0; padding-bottom: 0">Papers</h1><hr/>
                        {% for article in site.data.content.papers %}
                            <div class="card-simple">
                                <div class="article-metadata">
                                    <div>{{article.author}}</div>
                                    <div>
                                        {{article.date}}
                                        <span class="middot-divider"></span>
                                        <em>{{article.journal}}</em>
                                    </div>
                                </div>
                                <h4>{{article.title}}</h4>
                                <a class="badge-light" target="_blank" href="https://doi.org/{{article.doi}}">
                                    {{article.status}}
                                </a>
                            </div>
                        {% endfor %}
                    </div>
                </div>
            </div>
        </section>
        <section id="conferences" class="home-section wg-featured">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-4" style="position: relative; z-index:1"></div>
                    <div class="col-12 col-lg-8">
                        <h1 style="border-bottom: 0; padding-bottom: 0">Conferences</h1><hr/>
                        {% for talks in site.data.content.conferences %}
                            <div class="card-simple">
                                <div class="article-metadata">
                                    <div>{{talks.author}}</div>
                                    <div>
                                        {{talks.date}}
                                        <span class="middot-divider"></span>
                                        <em>{{talks.place}}</em>
                                    </div>
                                </div>
                                <h4>{{talks.title}}</h4>
                                <img class="article-banner" src="{{talks.poster}}">
                                <p>{{talks.abstract}}</p>
                            </div>
                        {% endfor %}
                    </div>
                </div>
            </div>
        </section>
    </div>
</body>
