import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../views/Layout.vue";
Vue.use(VueRouter);

let routes = [];
const tabRoutes = [
  "/container",
  "/color",
  "/typography",
  "/border",
  "/icon",
  "/button",
  "/link",
  "/radio",
  "/checkbox",
  "/input",
  "/inputNumber",
  "/select",
  "/cascader",
  "/switch",
  "/slider",
  "/timePicker",
  "/datePicker",
  "/dateTimePicker",
  "/upload",
  "/rate",
  "/colorPicker",
  "/transfer",
  "/form",
  "/table",
  "/tag",
  "/progress",
  "/tree",
  "/pagination",
  "/badge",
  "/avatar",
  "/alert",
  "/loading",
  "/message",
  "/messageBox",
  "/notification",
  "/navMenu",
  "/tabs",
  "/breadcrumb",
  "/pageHeader",
  "/dropdown",
  "/steps",
  "/dialog",
  "/tooltip",
  "/popover",
  "/popconfirm",
  "/card",
  "/carousel",
  "/collapse",
  "/timeline",
  "/divider",
  "/calendar",
  "/image",
  "/backtop",
  "/infiniteScroll",
  "/drawer"
].map(function(item) {
  let name = item[1].toUpperCase();
  name = "/" + name + item.slice(2);
  if (name == "/Table") {
    let tablename = [];
    for (let i = 1; i < 21; i++) {
      tablename.push({
        path: "table" + i,
        component: () => import("../views/tables/table" + i + ".vue")
      });
    }
    return {
      path: item,
      component: () => import("../views/Table.vue"),
      redirect:'/table/table1',
      children: tablename
    };
  }else if(name == "/Tree"){
    let tablename = [];
    for (let i = 1; i < 11; i++) {
      tablename.push({
        path: "tree" + i,
        component: () => import("../views/tree/tree" + i + ".vue")
      });
    }
    return {
      path: item,
      component: () => import("../views/Tree.vue"),
      redirect:'/tree/tree1',
      children: tablename
    };
  }
  return {
    path: item,
    component: () => import("../views" + name + ".vue")
  };
});
routes.push(
  {
    path: "/layout",
    component: Layout
  },
  ...tabRoutes,
  {
    path: "/*",
    redirect: "/layout"
  }
);
const router = new VueRouter({
  routes
});
export default router;
