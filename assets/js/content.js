$(function(){
    $.getJSON("./util/content.json", function(data){
        $('#name').html(data.title)
        $('#role').html(data.role)
        $('#place').html(data.place)
        $('#profile-picture').attr({src: data.profile})
        console.log(data.biography.education)
        $('#edu-degree').html(data.biography.education.degree + ".")
        $('#edu-focus-minor').html("Focus in " + data.biography.education.focus +". Minor in "+ data.biography.education.minor)
        $('#edu-date').html(data.biography.education.date + " <em>(Expected)</em>.")
        $('#edu-place').html(data.biography.education.place)

        document.getElementById('bio_description').innerHTML = data.biography.description

        for (let [key, vals] of Object.entries(data.biography.interests)){
            $('#interests').append("<li>" + `${vals}` + "</li>")
        }
        var i = 0
        Object.values(data.skill).forEach(val => {
            var skill = document.createElement('div')
            var skilldiv = document.createElement('div')
            var skilldivicon = document.createElement('div')
            var skillname = document.createElement('h3')
            var tree = document.createDocumentFragment();

            skill.setAttribute("class", "col-12 col-sm-4")
            skilldiv.setAttribute("class", "featurette-icon")
            skilldivicon.setAttribute('class', String(val.icon))
            skillname.setAttribute("id", String("skill-name" + i))

            tree.appendChild(skill)
            skill.appendChild(skilldiv)
            skilldiv.appendChild(skilldivicon)
            skilldiv.appendChild(skillname)

            document.getElementById('skill').appendChild(tree)
            $("#skill-name" + i).html(Object.values(data.skill)[i].name)
            i++
        })
        var i = 0
        Object.values(data.workhistory).forEach(val => {
            var tree = document.createDocumentFragment();
            var w0 = document.createElement('div')
            var w1 = document.createElement('div')
            var w2 = document.createElement('div')
            var w3 = document.createElement('div')
            var wtitle = document.createElement('h4')
            var wplace = document.createElement('h4')
            var wmisc = document.createElement('div')
            var wdes = document.createElement('div')
            var wspace = document.createElement('div')

            w0.setAttribute('class', 'row experience')
            w1.setAttribute('class', 'col py-2')
            w2.setAttribute('class', 'card')
            w3.setAttribute('class', 'card-body')
            wtitle.setAttribute('class', 'card-title exp-title text-muted mt-0 mb-1')
            wplace.setAttribute('class', 'card-title exp-company text-muted my-0')
            wmisc.setAttribute('class', 'text-muted exp-meta')
            wdes.setAttribute('class', 'card-text')
            wspace.setAttribute('class', 'col-auto text-center flex-column d-none d-sm-flex')

            wtitle.setAttribute('id', String("work-name" + i))
            wplace.setAttribute('id', String("work-place" + i))
            wmisc.setAttribute('id', String("work-misc" + i))
            wdes.setAttribute('id', String("work-description" + i))
            wspace.setAttribute('id', String("work-space" + i))

            tree.appendChild(w0)

            w0.appendChild(w1)
            w1.appendChild(w2)
            w2.appendChild(w3)
            w3.appendChild(wtitle)
            w3.appendChild(wplace)
            w3.appendChild(wmisc)
            w3.appendChild(wdes)

            document.getElementById('workhistory').appendChild(tree)

            $("#work-name" + i).html(Object.values(data.workhistory)[i].title)
            $("#work-place" + i).html(Object.values(data.workhistory)[i].place)
            $('#work-misc' + i).html(Object.values(data.workhistory)[i].start + "  --  " + Object.values(data.workhistory)[i].end + "<span class='middot-divider'></span>" + Object.values(data.workhistory)[i].city + ", " + Object.values(data.workhistory)[i].state)
            $('#work-description' + i).html(Object.values(data.workhistory)[i].description)
            $('#work-space' + i).html("")
            i++
        })
        var i = 0
        Object.values(data.conferences).forEach(val => {
            var con = document.createElement('div')
            var card = document.createElement('div')
            var article = document.createElement('div')
            var tree = document.createDocumentFragment();
            var cauthor = document.createElement('div')
            var cmisc = document.createElement('div')
            var cimg = document.createElement('img')
            var ctitle = document.createElement('h3')
            var cabstr = document.createElement('p')

            card.setAttribute('class', 'card-simple')
            article.setAttribute('class', 'article-metadata')
            cimg.setAttribute('class', 'article-banner')
            ctitle.setAttribute('class', 'article-subtitle mb-1 mt-3')

            cauthor.setAttribute('id', String('conference-author'+i))
            cmisc.setAttribute('id', String('conference-misc'+i))
            cimg.setAttribute('id', String('conference-img' + i))
            ctitle.setAttribute('id', String('conference-title' + i))
            cabstr.setAttribute('id', String('conference-abstract' + i))

            tree.appendChild(con)
            tree.appendChild(document.createElement('br'))
            con.appendChild(card)
            card.appendChild(article)
            article.appendChild(cauthor)
            article.appendChild(cmisc)
            card.appendChild(cimg)
            card.appendChild(ctitle)
            card.appendChild(cabstr)

            document.getElementById('conference').appendChild(tree)
            $("#conference-author" + i).html(Object.values(data.conferences)[i].author)
            $("#conference-misc" + i).html(Object.values(data.conferences)[i].date + '<span class="middot-divider"></span>' + '<em>' + Object.values(data.conferences)[i].place + '</em>')
            $("#conference-img" + i).attr({src: Object.values(data.conferences)[i].poster})
            $("#conference-title" + i).html(Object.values(data.conferences)[i].title)
            $("#conference-abstract" + i).html(Object.values(data.conferences)[i].abstract)
            $("#conference-abstract" + i).attr({style: 'font-size: 13px; line-height: 1.5'})

            i++
        })
        var i = 0
        Object.values(data.papers).forEach(val => {
            var pap = document.createElement('div')
            var pcard = document.createElement('div')
            var particle = document.createElement('div')
            var tree = document.createDocumentFragment();
            var pauthor = document.createElement('div')
            var pmisc = document.createElement('div')
            var ptitle = document.createElement('h4')
            var pstatus = document.createElement('a')
            var pdoi = document.createElement('a')

            pcard.setAttribute('class', 'card-simple')
            particle.setAttribute('class', 'article-metadata')
            pstatus.setAttribute('class', 'badge-light')


            pauthor.setAttribute('id', String('paper-author'+i))
            pmisc.setAttribute('id', String('paper-misc'+i))
            ptitle.setAttribute('id', String('paper-title' + i))
            pstatus.setAttribute('id', String('paper-status' + i))



            tree.appendChild(pap)
            tree.appendChild(document.createElement('br'))
            pap.appendChild(pcard)
            pcard.appendChild(particle)
            particle.appendChild(pauthor)
            particle.appendChild(pmisc)
            pcard.appendChild(ptitle)
            pcard.appendChild(pstatus)

            if (Object.values(data.papers)[i].doi !== null){
                pdoi.setAttribute('class', 'badge-light')
                pdoi.setAttribute('id', String('paper-doi' + i))

                pcard.appendChild(pdoi)
            }

            document.getElementById('paper').appendChild(tree)
            if (Object.values(data.papers)[i].doi !== null){
                $("#paper-doi"+i).html("Web View")
                $("#paper-doi"+i).attr({target: "_blank", href: "https://doi.org/" + String(Object.values(data.papers)[i].doi)})
            }

            $("#paper-author" + i).html(Object.values(data.papers)[i].author)
            $("#paper-misc" + i).html(Object.values(data.papers)[i].date + '<span class="middot-divider"></span>' + '<em>' + Object.values(data.papers)[i].journal + '</em>')
            $("#paper-title" + i).html(Object.values(data.papers)[i].title)
            $("#paper-status"+i).html(Object.values(data.papers)[i].status)

            i++
        })
   })
})