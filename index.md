---
title: Spencer Riley
---

<head>
	<link rel="icon" href="assets/img/icon.png" type="image/png">
	<title>{{site.data.content.name}}</title>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/academicons/1.8.6/css/academicons.min.css" crossorigin="anonymous">
	<link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.cyan-indigo.min.css" />
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.12.0/devicon.min.css">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.0/css/all.css" crossorigin="anonymous">
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
	<meta name="HandheldFriendly" content="True">
	<meta name="MobileOptimized" content="320">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<script src='https://code.jquery.com/jquery-3.6.0.min.js'></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.min.js" crossorigin="anonymous"></script>
	<script src="assets/js/academic.min.js"></script>
	<script type="module" src="assets/js/zero-md.min.js"></script>

	<script>
	if (document.location.protocol != "https:") {
	    document.location = document.URL.replace(/^http:/i, "https:");
	}
	</script>
	<link rel="stylesheet" type="text/css" href="assets/css/about.css">
	<link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css">
</head>
<body id="top" data-spy="scroll" data-target="#navbar-main" class="dark" data-offset="71">
	{% include navigation.html %}
    <div id="main" role="main">
	{% include bio.html %}
	{% include skill.html %}
	{% include work.html %}
	{% include projects.html %}
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
