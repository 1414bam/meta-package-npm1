// import Head from 'next/head';
// import { observer } from 'mobx-react-lite';
// import { useRouteContext } from '../../contexts/RouteContext';
// import { useContentContext } from '../../contexts/ContentContext';
// import { useStoresContext } from '../../contexts/StoresContext';
// import i18n from "../../services/LocaliztionService";
// import domains from '../../config/domains';

// const Meta = observer(({ h1, title, description, children }) => {
//     const { configStore } = useStoresContext();
//     const { contentContext } = useContentContext();
//     const { culture, cultureRoute } = contentContext.routeContext;
//     const { routeTree } = useRouteContext();
//     const { path, name } = routeTree;
//     const cleanPath = cultureRoute === "" ? path : path.replace(`/${cultureRoute}`, "");
//     const helmetContentConfig = configStore.getObservedHelmetConfig(culture);
//     let config = helmetContentConfig && helmetContentConfig.find((configs) => {
//         return configs.path === path;
//     });

//     config = config || {};
//     config.title = config.title || i18n.getForamtedValue("HELMET_DEFAULT_TITLE", title || h1);
//     config.description = config.description || description || i18n.getValue("HELMET_DEFAULT_DESCRIPTION");

//     const buildAlternates = (path) => {
//         return domains.map(domain => {
//             const links = [];
//             let cultures = domain.cultures;

//             if (routeTree && routeTree.implicitCultures && routeTree.implicitCultures.length) {
//                 cultures = cultures.filter((culture) => { return routeTree.implicitCultures.includes(culture.culture) });
//             }

//             links.push(cultures.map(culture => {
//                 const name = culture.culture === 'en-ROW' ? 'en' : culture.culture;
//                 const route = culture.route !== "" ? `/${culture.route}` : culture.route;
//                 return <link key={name} rel="alternate" hrefLang={name} href={`https://${domain.host}${route}${path}`} />
//             }));
//             return links;
//         });
//     };

//     if (name === "homeEN") {
//         return (
//             <Head>
//                 <title key="title">{config.title}</title>
//                 (<meta name="robots" content="noindex,nofollow" />)
//             </Head>
//         )
//     }

//     return (
//         <Head>
//             <title key="title">{config.title}</title>
//             <meta key="description" name="description" content={config.description} />
//             <link key="x-default" rel="alternate" hrefLang="x-default" href={`https://${domains[0].host}${cleanPath}`} />
//             {
//                 buildAlternates(cleanPath).map(link => { return link; })
//             }
//             {children}
//         </Head>
//     )
// });

// export default Meta;


export function helloWorldPrinter(msg: String) {
    console.log('Important message: ',msg);
} 