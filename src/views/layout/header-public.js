const HeadPublic = {
    view: () => {
        return [
            m("header",
                m("div..position-relative.set-bg.breadcrumb-container", { "style": { "background-position": "center center", "background-size": "cover", "background-repeat": "no-repeat" } }, [
                    m("div.overlay.op-P9"),
                    m("div.container",
                        m("div.row",
                            m("div.col-md-12",)
                        )
                    )
                ]),
                m("nav.navbar.bg-white.s-dp-1-3.navbar-sticky.type-3.navbar-expand-lg.m-navbar.bcbd_navbar",
                    m("div.container.position-relative",
                        [
                            m("a.navbar-brand[href='/']",
                                m("img[src='assets/logo.metrovirtual.png'][alt='Metrovirtual'][width='200rem']")
                            ),

                            m(".collapse.navbar-collapse.bcbd_collpase_nav[id='navbarSupportedContent']",
                                [
                                    m("div.nav_outer.mr-auto.ml-lg-auto.mr-lg-0",
                                        [
                                            m("img.d-block.d-md-none[src='assets/images/logo-white.png'][alt='']"),
                                            m("ul.navbar-nav.bcbd_nav.mr-lg-4.",
                                                [

                                                    m("li.nav-item",
                                                        m("a.nav-link[href='/']", { "style": { "text-transform": "initial" } },
                                                            " v3.0.0 "
                                                        )
                                                    )
                                                ]
                                            ),

                                        ]
                                    ),
                                    m("div.navigation_right_area.position-relative.d-none.d-lg-block.navbar-search.my-lg-0",
                                        m("a.btn.fadeInDown-slide.animated.no-border.bg-transparent.medim-btn.grad-bg--3.position-relative.solid-btn.mt-0.text-medium.radius-pill.text-active.text-uppercase.text-white[href='/']",
                                            "Médicos"
                                        )
                                    )
                                ]
                            )
                        ]
                    )
                )
            )
        ];
    },

};

export default HeadPublic;