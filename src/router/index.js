import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../views/Layout.vue";
Vue.use(VueRouter);

let routes = [];
const tabRoutes=[
  '/container','/color','/typography','/border','/icon','/button','/link','/radio','/checkbox',
  '/input','/inputNumber','/select','/cascader','/switch','/slider','/timePicker','/datePicker',
  '/dateTimePicker','/upload','/rate','/colorPicker','/transfer','/form','/table','/tag',
  '/progress','/tree','/pagination','/badge','/avater','/alert','/loading','/message',
  '/messageBox','/notification','/navMenu','/tabs','/breadcrumb','/pageHeader','/dropdown','/steps',
  '/dialog','/tooltip','/popover','/popconfirm','/card','/carousel','/collapse','/timeline',
  '/divider','/calendar','/image','/backtop','/infiniteScrool','/drawer'
].map(function(item){
    let name=item[1].toUpperCase();
    name='/'+name+item.slice(2)
    return {
      path:item,
      component:() => import("../views"+name+".vue")
    }
})
routes.push({
  path: "/layout",
  component: Layout
},...tabRoutes,{
  path: "/*",
  redirect: "/layout"
})
const router = new VueRouter({
  routes
});
export default router;
