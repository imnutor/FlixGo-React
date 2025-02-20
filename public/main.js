!(function(s) {
  s.fn.moreLines = function(e) {
    "use strict";
    return (
      this.each(function() {
        var t = s(this),
          i = (t.find("p"), parseFloat(t.css("line-height"))),
          a = t.innerHeight(),
          n = s.extend(
            {
              linecount: 1,
              baseclass: "b-morelines_",
              basejsclass: "js-morelines_",
              classspecific: "section",
              buttontxtmore: "more lines",
              buttontxtless: "less lines",
              animationspeed: 1
            },
            e
          ),
          c = n.baseclass + n.classspecific + "_ellipsis",
          l = n.baseclass + n.classspecific + "_button",
          o = n.baseclass + n.classspecific + "_wrapper",
          h = n.basejsclass + n.classspecific + "_wrapper",
          r = s("<div>")
            .addClass(o + " " + h)
            .css({ "max-width": t.css("width") }),
          m = i * n.linecount;
        if ((t.wrap(r), t.parent().not(h) && a > m)) {
          t.addClass(c).css({
            "min-height": m,
            "max-height": m,
            overflow: "hidden"
          });
          var p = s("<div>", {
            class: l,
            click: function() {
              t.toggleClass(c),
                s(this).toggleClass(l + "_active"),
                "none" !== t.css("max-height")
                  ? t
                      .css({ height: m, "max-height": "" })
                      .animate({ height: a }, n.animationspeed, function() {
                        p.html(n.buttontxtless);
                      })
                  : t.animate({ height: m }, n.animationspeed, function() {
                      p.html(n.buttontxtmore), t.css("max-height", m);
                    });
            },
            html: n.buttontxtmore
          });
          t.after(p);
        }
      }),
      this
    );
  };
})(jQuery);