$(function(){
    $.getJSON("./util/content.json", function(data){
        $('#name').html(data.name)
        $('#role').html(data.role)
        $('#place').html(data.place)
        $('#profile-picture').attr({src: data.profile})
        
        $('#edu-degree').html(Object.values(data.biography.education)[0].degree + ".")
        $('#edu-focus-minor').html("Focus in " + Object.values(data.biography.education)[0].focus +". Minor in "+ data.biography.education.minor)
        $('#edu-date').html(Object.values(data.biography.education)[0].date + " <em>(Expected)</em>.")
        $('#edu-place').html(Object.values(data.biography.education)[0].place)

        document.getElementById('bio_description').innerHTML = data.biography.description
        
        Object.values(data.biography.interests).forEach(val => {
             $('#interests').append("<li>" + String(val.item) + "</li>")
        })
        <span class="mdl-chip mdl-chip--contact">
    <span class="mdl-chip__contact mdl-color--teal mdl-color-text--white">A</span>
    <span class="mdl-chip__text">Contact Chip</span>
</span>
        var i = 0
        Object.values(data.skills).forEach(val => {
            var skill = document.createElement('span')
            var skilldivicon = document.createElement('span')
            var skilltext = document.createElement('span')
            var skillicon = document.createElement('i')
            var tree = document.createDocumentFragment();

            skill.setAttribute("class", "mdl-chip mdl-chip--contact")
            skilldivicon.setAttribute("class", "mdl-chip__contact mdl-color--teal mdl-color-text--white")
            skilltext.setAttribute('class', 'mdl-chip__text')
            skillicon.setAttribute("class", 'material-icons')
            skillicon.setAttribute('id', String('skill-icon' + i))
            skilltext.setAttribute('id', String('skill-text' + i))

            tree.appendChild(skill)
            skill.appendChild(skilldivicon)
            skill.appendChild(skilltext)

            document.getElementById('skill').appendChild(tree)
            $("#skill-icon" + i).html(val.icon)
            $("#skill-text" + i).html(val.text)
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

            $("#work-name" + i).html(val.title)
            $("#work-place" + i).html(val.place)
            $('#work-misc' + i).html(val.start + "  --  " + val.end + "<span class='middot-divider'></span>" + val.city + ", " + val.state)
            $('#work-description' + i).html(val.description)
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
            $("#conference-author" + i).html(val.author)
            $("#conference-misc" + i).html(val.date + '<span class="middot-divider"></span>' + '<em>' + val.place + '</em>')
            $("#conference-img" + i).attr({src: val.poster})
            $("#conference-title" + i).html(val.title)
            $("#conference-abstract" + i).html(val.abstract)
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

            if (val.doi !== null){
                pdoi.setAttribute('class', 'badge-light')
                pdoi.setAttribute('id', String('paper-doi' + i))

                pcard.appendChild(pdoi)
            }

            document.getElementById('paper').appendChild(tree)
            if (val.doi !== null){
                $("#paper-doi"+i).html("Web View")
                $("#paper-doi"+i).attr({target: "_blank", href: "https://doi.org/" + String(val.doi)})
            }

            $("#paper-author" + i).html(val.author)
            $("#paper-misc" + i).html(val.date + '<span class="middot-divider"></span>' + '<em>' + val.journal + '</em>')
            $("#paper-title" + i).html(val.title)
            $("#paper-status"+i).html(val.status)

            i++
        })
        var i = 0
        Object.values(data.projects).forEach(val => {
            var tree = document.createDocumentFragment();
            var proj = document.createElement('div')
            var proj2 = document.createElement('div')
            var projcard = document.createElement('div')
            var projtext = document.createElement('div')
            var projdesc = document.createElement('div')
            var projtitle = document.createElement('h4')
            var projfeat = document.createElement('p')
            var projmedia = document.createElement('div')
            var projstatus = document.createElement('a')
            var projcardtext = document.createElement('div')
            var projtext2 = document.createElement('p')
            var markdown = document.createElement('zero-md')
            var markstyle = document.createElement('style')
            var template = document.createElement('template')
            var badge = document.createElement('a')
            var divstat = document.createElement('div')

            proj.setAttribute('class', 'project-card project-item isotope-item')
            projcard.setAttribute('class', 'card')
            projtext.setAttribute('class', 'card-text')
            projdesc.setAttribute('class', 'card-description')
            projdesc.setAttribute('style', 'display: flex')
            projstatus.setAttribute('class', 'badge-light')
            projstatus.setAttribute('style', 'border-top-left-radius: 25px; border-bottom-left-radius: 25px; background: #00BCC2')
            projmedia.setAttribute('style', "flex: 25%; display: flex; align-items: center; justify-content: center;")
            projcardtext.setAttribute('style', 'flex: 50%')
            template.setAttribute('data-merge', 'prepend')
            divstat.setAttribute('style', 'display: flex')
            badge.setAttribute('class', 'badge-light')

            if (val.maintained.bool){
                badge.setAttribute('style', 'background-color: #00C200; border-top-right-radius: 25px; border-bottom-right-radius: 25px')
                var main = "Maintained"
            } else {
                badge.setAttribute('style', 'background-color: #C20000; border-top-right-radius: 25px; border-bottom-right-radius: 25px')
                var main = 'Not Maintained (Since ' + val.maintained.year + ')'
            }

            proj.setAttribute('id', 'proj'+i)
            projtitle.setAttribute('id', 'project-title'+i)
            projfeat.setAttribute('id', 'project-feat'+i)
            projmedia.setAttribute('id', 'project-media'+i)
            projstatus.setAttribute('id', 'project-status'+i)
            markdown.setAttribute('id', 'project-text'+i)
            markstyle.setAttribute('id', 'markstyle')
            template.setAttribute('id', 'template')
            badge.setAttribute('id','project-badge'+i)

            $('#template').html('<link rel="stylesheet" href="assets/css/about.css">')

            tree.appendChild(proj)
            proj.appendChild(projcard)
            projcard.appendChild(projtext)
            projtext.appendChild(projtitle)
            projtext.appendChild(projdesc)
            projdesc.appendChild(projcardtext)
            projtext.appendChild(projfeat)
            projcardtext.appendChild(markdown)
            markdown.appendChild(template)
            template.appendChild(markstyle)
            projdesc.appendChild(projmedia)
            projtext.appendChild(document.createElement('hr'))
            projtext.appendChild(divstat)
            divstat.appendChild(projstatus)
            divstat.appendChild(badge)
            tree.appendChild(document.createElement('br'))

            document.getElementById('projs').appendChild(tree)

            $("#project-title" + i).html('<a href='+ val.link +' target="_blank" rel="noopener"><i class="fab fa-github small-icon"></i> ' + val.title + '</a>')
            $("#project-status" + i).html(val.status)
            $("#project-feat" + i).html(val.featured)
            if (val.imgvid.includes('mp4')){
                $('#project-media' + i).html('<video class="portrait" playsinline autoplay muted loop><source  src=' + val.imgvid + ' type="video/mp4"></video>')
            } else {
                $('#project-media' + i).html('<img class="portrait" src=' + val.imgvid + '>')    
            }
            $('#project-text'+i).attr({src: val.description})
            $('#project-badge' + i).html(main)

            Object.values(val.tags).forEach(valt => {
                proj.setAttribute('class', "js-id-"+ String(valt.tag) + " " + proj.getAttribute('class'))
            })
            i++
        })
   })
})
