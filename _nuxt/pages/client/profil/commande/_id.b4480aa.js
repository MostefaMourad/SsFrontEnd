(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{483:function(t,r,e){"use strict";e.r(r);var n={layout:"profil",data:function(){return{commande:"11111542",inset:!1,articles:3,livraison:1420,total:1400,firstname:"MOURAD",lastname:"MOSTEFA",adress:"Chorfa 327,BLOCK R17",region:"Chlef",ville:"Chlef",date:"29-07-2020",etat:"EN ATTENTE DE CONFIRMATION",produit:{titre:"Masque De Protection Lavable Homologation Ffp2",quantite:1,prix:640}}}},v=e(22),l=e(18),o=e.n(l),c=e(328),d=e(164),_=e(84),h=e(340),m=e(347),w=e(331),C=e(158),x=e(135),f=e(339),component=Object(v.a)(n,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("v-card",{attrs:{"elevation-1":""}},[e("v-container",[e("v-card-title",[e("v-row",{attrs:{align:"center"}},[e("v-col",{attrs:{md:"1"}},[e("v-btn",{attrs:{icon:"",large:""},on:{click:function(r){return t.$router.push("/client/profil/commandes")}}},[e("v-icon",[t._v("mdi-arrow-left")])],1)],1),t._v(" "),e("v-col",{attrs:{md:"10",align:"center"}},[e("h2",[t._v("\n                    Détails de la commande\n                ")])])],1)],1),t._v(" "),e("v-divider"),t._v(" "),e("v-card-text",[e("v-row",[e("v-col",[e("h3",[t._v("Commande n° "+t._s(t.commande))]),t._v(" "),e("h3",{staticClass:"font-weight-light grey--text"},[t._v("\n            "+t._s(t.articles)+" articles\n            ")]),t._v(" "),e("h3",{staticClass:"font-weight-light grey--text"},[t._v("\n            Placée le "+t._s(t.date)+"\n            ")]),t._v(" "),e("h3",{staticClass:"font-weight-light grey--text"},[t._v("\n                Total : "+t._s(t.total)+"\n            ")])])],1),t._v(" "),e("v-divider"),t._v(" "),e("v-row",[e("v-col",[e("h2",{staticClass:"font-weight-light grey--text"},[t._v("\n            ARTICLES DANS VOTRE COMMANDE\n        ")]),t._v(" "),e("v-card",{attrs:{outlined:""}},[e("v-card-title",[t._v("\n               Statut : "),e("span",{staticClass:"primary--text"},[t._v(" "+t._s(t.etat)+" ")])]),t._v(" "),e("v-divider"),t._v(" "),e("v-card-text",[e("v-container",t._l(t.articles,(function(r){return e("v-row",{key:r},[e("v-container",[e("v-row",[e("v-col",{attrs:{md:"4"}},[e("v-img",{attrs:{src:"https://picsum.photos/510/300?random"}})],1),t._v(" "),e("v-col",{attrs:{md:"8"}},[e("v-row",[e("h2",[t._v("\n                                "+t._s(t.produit.titre)+" \n                            ")]),t._v("\n                             \n                            ")]),t._v(" "),e("v-row",[e("h3",{staticClass:"font-weight-light primary--text"},[t._v("\n                                Prix : "+t._s(t.produit.prix)+"\n                                ")])]),t._v(" "),e("v-row",[e("h3",{staticClass:"font-weight-light grey--text"},[t._v("\n                                    Quantité : "+t._s(t.produit.quantite)+"\n                                ")])])],1),t._v(" "),e("v-divider")],1)],1)],1)})),1)],1),t._v(" "),e("v-divider"),t._v(" "),e("v-card-actions",[e("v-container",[e("v-row",{attrs:{align:"center"}},[e("v-col",{attrs:{md:"8"}},[e("v-row",{attrs:{align:"center"}},[e("v-icon",[t._v("\n                                mdi-truck\n                            ")]),t._v("\n                              \n                            "),e("h3",[t._v("\n                                Livré entre le dimanche 16 août et le dimanche 23 août\n                            ")])],1)],1),t._v(" "),e("v-col",{attrs:{md:"4"}},[e("v-row",[e("v-btn",{attrs:{text:"",color:"primary"}},[t._v(" ANNULER LA COMMANDE ")])],1)],1)],1)],1)],1)],1)],1)],1),t._v(" "),e("v-row",{attrs:{align:"center"}},[e("v-col",{attrs:{align:"center"}},[e("v-card",{attrs:{outlined:""}},[e("v-card-title",[t._v("\n                PAIEMENT\n                ")]),t._v(" "),e("v-divider",{attrs:{inset:t.inset}}),t._v(" "),e("v-card-text",[e("v-row",[e("v-card-title",[t._v("\n                        Méthode de paiement\n                        ")]),t._v(" "),e("v-card-subtitle",[t._v("\n                            Paiement à la livraison\n                        ")])],1),t._v(" "),e("v-row",{attrs:{align:"center"}},[e("v-col",{attrs:{align:"left"}},[e("v-card-title",[t._v("\n                        Détails du paiement\n                    ")]),t._v(" "),e("v-card-subtitle",[e("h4",{staticClass:"grey--text"},[t._v("\n                          Sous-total :"+t._s(t.produit.prix*t.articles)+" DA\n                        ")]),t._v(" "),e("h4",{staticClass:"grey--text"},[t._v("\n                            Frais de Livraison :"+t._s(t.livraison)+" DA\n                        ")]),t._v(" "),e("h4",{staticClass:"grey--text"},[t._v("\n                            Total : "+t._s(t.produit.prix*t.articles+t.livraison)+" DA\n                        ")])])],1)],1)],1)],1)],1),t._v(" "),e("v-col",{attrs:{align:"center"}},[e("v-card",{attrs:{outlined:""}},[e("v-card-title",[t._v("\n                LIVRAISON\n                ")]),t._v(" "),e("v-divider",{attrs:{inset:t.inset}}),t._v(" "),e("v-card-text",[e("v-row",[e("v-card-title",[t._v("\n                        Méthode de livraison\n                        ")]),t._v(" "),e("v-card-subtitle",[t._v("\n                        Livraison standard\n                        ")])],1),t._v(" "),e("v-row",[e("v-col",{attrs:{align:"left"}},[e("v-card-title",[t._v("\n                            Adresse de livraison\n                        ")]),t._v(" "),e("v-card-subtitle",[e("h4",{staticClass:"grey--text"},[t._v("\n                            "+t._s(t.firstname+" "+t.lastname)+"\n                            ")]),t._v(" "),e("h4",{staticClass:"grey--text"},[t._v("\n                            "+t._s(t.adress)+"\n                            ")]),t._v(" "),e("h4",{staticClass:"grey--text"},[t._v("\n                            "+t._s(t.ville+", "+t.region)+"\n                            ")])])],1)],1)],1)],1)],1)],1)],1),t._v(" "),e("v-card-actions",[e("v-row",[e("v-col",{attrs:{align:"center"}},[e("v-btn",{attrs:{text:"",color:"primary"}},[t._v(" BESOIN D'AIDE ?")])],1)],1)],1)],1)],1)}),[],!1,null,"f5790758",null);r.default=component.exports;o()(component,{VBtn:c.a,VCard:d.a,VCardActions:_.a,VCardSubtitle:_.b,VCardText:_.c,VCardTitle:_.d,VCol:h.a,VContainer:m.a,VDivider:w.a,VIcon:C.a,VImg:x.a,VRow:f.a})}}]);