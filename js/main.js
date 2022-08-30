var krpano = document.getElementById("krpanoSWFObject");
var night = false;

/**
 * Process set day night tour
 */
function setViewDayNight()
{
    if (night)
    {
        krpano.call(
            "set(scene[scene_csj-1].onstart,setimage(csj-1-night));" +
            "set(scene[scene_csj-1].thumburl,panos/csj-1-night.tiles/thumb.jpg);" +
            // "set(scene[scene_csj-2].onstart,setimage(csj-2-night));" +
            // "set(scene[scene_csj-2].thumburl,panos/csj-2-night.tiles/thumb.jpg);" +
            "set(scene[scene_csj-3].onstart,setimage(csj-3-night));" +
            "set(scene[scene_csj-3].thumburl,panos/csj-3-night.tiles/thumb.jpg);" +
            "set(scene[scene_csj-4].onstart,setimage(csj-4-night));" +
            "set(scene[scene_csj-4].thumburl,panos/csj-4-night.tiles/thumb.jpg);" +
            "set(scene[scene_csj-5].onstart,setimage(csj-5-night));" +
            "set(scene[scene_csj-5].thumburl,panos/csj-5-night.tiles/thumb.jpg);" +
            "set(scene[scene_csj-6].onstart,setimage(csj-6-night));" +
            "set(scene[scene_csj-6].thumburl,panos/csj-6-night.tiles/thumb.jpg);" +
            "set(scene[scene_csj-7].onstart,setimage(csj-7-night));" +
            "set(scene[scene_csj-7].thumburl,panos/csj-7-night.tiles/thumb.jpg);" +
            "set(scene[scene_csj-8].onstart,setimage(csj-8-night));" +
            "set(scene[scene_csj-8].thumburl,panos/csj-8-night.tiles/thumb.jpg);" +
            "set(scene[scene_csj-9].onstart,setimage(csj-9-night));" +
            "set(scene[scene_csj-9].thumburl,panos/csj-9-night.tiles/thumb.jpg);" +
            "set(night, true);"
        );
        night = false;
        krpano.call("loadscene(get(xml.scene),null,MERGE,OPENBLEND(1.0, -0.5, 0.3, 0.8, linear))");
    } else
    {
        krpano.call(
            "set(scene[scene_csj-1].onstart,setimage(csj-1));" +
            "set(scene[scene_csj-1].thumburl,panos/csj-1.tiles/thumb.jpg);" +
            // "set(scene[scene_csj-2].onstart,setimage(csj-2));" +
            // "set(scene[scene_csj-2].thumburl,panos/csj-2.tiles/thumb.jpg);" +
            "set(scene[scene_csj-3].onstart,setimage(csj-3));" +
            "set(scene[scene_csj-3].thumburl,panos/csj-3.tiles/thumb.jpg);" +
            "set(scene[scene_csj-4].onstart,setimage(csj-4));" +
            "set(scene[scene_csj-4].thumburl,panos/csj-4.tiles/thumb.jpg);" +
            "set(scene[scene_csj-5].onstart,setimage(csj-5));" +
            "set(scene[scene_csj-5].thumburl,panos/csj-5.tiles/thumb.jpg);" +
            "set(scene[scene_csj-6].onstart,setimage(csj-6));" +
            "set(scene[scene_csj-6].thumburl,panos/csj-6.tiles/thumb.jpg);" +
            "set(scene[scene_csj-7].onstart,setimage(csj-7));" +
            "set(scene[scene_csj-7].thumburl,panos/csj-7.tiles/thumb.jpg);" +
            "set(scene[scene_csj-8].onstart,setimage(csj-8));" +
            "set(scene[scene_csj-8].thumburl,panos/csj-8.tiles/thumb.jpg);" +
            "set(scene[scene_csj-9].onstart,setimage(csj-9));" +
            "set(scene[scene_csj-9].thumburl,panos/csj-9.tiles/thumb.jpg);" +
            "set(night, false);"
        );
        night = true;
        krpano.call("loadscene(get(xml.scene),null,MERGE,OPENBLEND(1.0, -0.5, 0.3, 0.8, linear))");
    }
}

$("#checkbox-daynight").on("click", function (e)
{
    if ($("#checkbox-daynight:checked").length)
    {
        night = true;
    } else
    {
        night = false;
    }
    setViewDayNight();
});

$("#btn-nav").on("click", function (e)
{
    var parent = $(this).parent();
    if (parent.hasClass("show"))
    {
        parent.removeClass("show");
    } else
    {
        parent.addClass("show");
    }
});

function loadSceneMenu(scene)
{
    krpano.call("loadscene(" + scene + ",null,MERGE,OPENBLEND(1.0, -0.5, 0.3, 0.8, linear))");
}

function hiddenBtnDayNight(hidden = false)
{
    var btn = $("#checkbox-daynight");
    if (hidden && !btn.hasClass('hide'))
    {
        btn.addClass('hide');
    }
    if (!hidden && btn.hasClass('hide'))
    {
        btn.removeClass('hide');

    }
}