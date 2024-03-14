"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[22499],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(n),g=r,m=c["".concat(s,".").concat(g)]||c[g]||u[g]||i;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},26982:(e,t,n)=>{n.d(t,{A:()=>r});var a=n(96540);const r=function(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},3593:(e,t,n)=>{n.d(t,{A:()=>u});var a=n(58168),r=n(96540),i=n(92303),l=n(48555);const o=function(){const e=(0,r.useContext)(l.A);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var s=n(91211),d=n(20053);const p={tabItem:"tabItem_vU9c"};function c(e){const{lazy:t,block:n,defaultValue:i,values:l,groupId:c,className:u}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),m=l??g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,s.XI)(m,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===i?i:i??g.find((e=>e.props.default))?.props.value??g[0]?.props.value;if(null!==h&&!m.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${m.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:b}=o(),[v,E]=(0,r.useState)(h),f=[],{blockElementScrollPositionUntilNextRender:w}=(0,s.a_)();if(null!=c){const e=N[c];null!=e&&e!==v&&m.some((t=>t.value===e))&&E(e)}const T=e=>{const t=e.currentTarget,n=f.indexOf(t),a=m[n].value;a!==v&&(w(t),E(a),null!=c&&b(c,a))},_=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=f.indexOf(e.currentTarget)+1;t=f[n]||f[0];break}case"ArrowLeft":{const n=f.indexOf(e.currentTarget)-1;t=f[n]||f[f.length-1];break}}t?.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.A)("tabs",{"tabs--block":n},u)},m.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>f.push(e),onKeyDown:_,onFocus:T,onClick:T},i,{className:(0,d.A)("tabs__item",p.tabItem,i?.className,{"tabs__item--active":v===t})}),n??t)}))),t?(0,r.cloneElement)(g.filter((e=>e.props.value===v))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function u(e){const t=(0,i.A)();return r.createElement(c,(0,a.A)({key:String(t)},e))}},87280:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(58168),r=(n(96540),n(15680));n(3593),n(26982);const i={title:"SQL DML",summary:"In this page, we go will cover details on how to use DML statements on Hudi tables.",toc:!0,last_modified_at:null},l=void 0,o={unversionedId:"sql_dml",id:"sql_dml",title:"SQL DML",description:"Spark SQL",source:"@site/docs/sql_dml.md",sourceDirName:".",slug:"/sql_dml",permalink:"/cn/docs/next/sql_dml",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/docs/sql_dml.md",tags:[],version:"current",frontMatter:{title:"SQL DML",summary:"In this page, we go will cover details on how to use DML statements on Hudi tables.",toc:!0,last_modified_at:null},sidebar:"docs",previous:{title:"SQL DDL",permalink:"/cn/docs/next/sql_ddl"},next:{title:"\u5199\u5165 Hudi \u6570\u636e\u96c6",permalink:"/cn/docs/next/writing_data"}},s=[{value:"Spark SQL",id:"spark-sql",children:[{value:"Insert Into",id:"insert-into",children:[],level:3},{value:"Insert Overwrite",id:"insert-overwrite",children:[],level:3},{value:"Update",id:"update",children:[],level:3},{value:"Merge Into",id:"merge-into",children:[],level:3},{value:"Delete From",id:"delete-from",children:[],level:3},{value:"Data Skipping and Indexing",id:"data-skipping-and-indexing",children:[],level:3}],level:2},{value:"Flink SQL",id:"flink-sql",children:[{value:"Insert Into",id:"insert-into-1",children:[],level:3},{value:"Update",id:"update-1",children:[],level:3},{value:"Delete From",id:"delete-from-1",children:[],level:3},{value:"Setting Writer/Reader Configs",id:"setting-writerreader-configs",children:[],level:3}],level:2},{value:"Flink SQL In Action",id:"flink-sql-in-action",children:[{value:"Non-Blocking Concurrency Control (Experimental)",id:"non-blocking-concurrency-control-experimental",children:[],level:3}],level:2}],d={toc:s},p="wrapper";function c(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"spark-sql"},"Spark SQL"),(0,r.yg)("p",null,"SparkSQL provides several Data Manipulation Language (DML) actions for interacting with Hudi tables. These operations allow you to insert, update, merge and delete data\nfrom your Hudi tables. Let's explore them one by one."),(0,r.yg)("p",null,"Please refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/next/sql_ddl"},"SQL DDL")," for creating Hudi tables using SQL."),(0,r.yg)("h3",{id:"insert-into"},"Insert Into"),(0,r.yg)("p",null,"You can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"INSERT INTO")," statement to add data to a Hudi table using Spark SQL. Here are some examples:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO <table> \nSELECT <columns> FROM <source>;\n")),(0,r.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.yg)("div",{parentName:"div",className:"admonition-heading"},(0,r.yg)("h5",{parentName:"div"},(0,r.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,r.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Deprecations")),(0,r.yg)("div",{parentName:"div",className:"admonition-content"},(0,r.yg)("p",{parentName:"div"},"From 0.14.0, ",(0,r.yg)("inlineCode",{parentName:"p"},"hoodie.sql.bulk.insert.enable")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"hoodie.sql.insert.mode")," are deprecated. Users are expected to use ",(0,r.yg)("inlineCode",{parentName:"p"},"hoodie.spark.sql.insert.into.operation")," instead.\nTo manage duplicates with ",(0,r.yg)("inlineCode",{parentName:"p"},"INSERT INTO"),", please check out ",(0,r.yg)("a",{parentName:"p",href:"/docs/next/configurations#hoodiedatasourceinsertduppolicy"},"insert dup policy config"),"."))),(0,r.yg)("p",null,"Examples: "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"-- Insert into a copy-on-write (COW) Hudi table\nINSERT INTO hudi_cow_nonpcf_tbl SELECT 1, 'a1', 20;\n\n-- Insert into a merge-on-read (MOR) Hudi table\nINSERT INTO hudi_mor_tbl SELECT 1, 'a1', 20, 1000;\n\n-- Insert into a COW Hudi table with static partition\nINSERT INTO hudi_cow_pt_tbl PARTITION(dt = '2021-12-09', hh='11') SELECT 2, 'a2', 1000;\n\n-- Insert into a COW Hudi table with dynamic partition\nINSERT INTO hudi_cow_pt_tbl PARTITION(dt, hh) SELECT 1 AS id, 'a1' AS name, 1000 AS ts, '2021-12-09' AS dt, '10' AS hh;\n")),(0,r.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.yg)("div",{parentName:"div",className:"admonition-heading"},(0,r.yg)("h5",{parentName:"div"},(0,r.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,r.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Mapping to write operations")),(0,r.yg)("div",{parentName:"div",className:"admonition-content"},(0,r.yg)("p",{parentName:"div"},"Hudi offers flexibility in choosing the underlying ",(0,r.yg)("a",{parentName:"p",href:"/docs/write_operations"},"write operation")," of a ",(0,r.yg)("inlineCode",{parentName:"p"},"INSERT INTO")," statement using\nthe ",(0,r.yg)("inlineCode",{parentName:"p"},"hoodie.spark.sql.insert.into.operation")," configuration. Possible options include ",(0,r.yg)("em",{parentName:"p"},'"bulk_insert"')," (large inserts), ",(0,r.yg)("em",{parentName:"p"},'"insert"')," (with small file management),\nand ",(0,r.yg)("em",{parentName:"p"},'"upsert"')," (with deduplication/merging). If a precombine field is not set, ",(0,r.yg)("em",{parentName:"p"},'"insert"')," is chosen as the default. For a table with preCombine field set,\n",(0,r.yg)("em",{parentName:"p"},'"upsert"')," is chosen as the default operation."))),(0,r.yg)("h3",{id:"insert-overwrite"},"Insert Overwrite"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"INSERT OVERWRITE")," statement is used to replace existing data in a Hudi table. "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"INSERT OVERWRITE <table> \nSELECT <columns> FROM <source>;\n")),(0,r.yg)("p",null,"All existing partitions that are affected by the ",(0,r.yg)("inlineCode",{parentName:"p"},"INSERT OVERWRITE")," statement will replaced with the source data.\nHere are some examples:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"-- Overwrite non-partitioned table\nINSERT OVERWRITE hudi_mor_tbl SELECT 99, 'a99', 20.0, 900;\nINSERT OVERWRITE hudi_cow_nonpcf_tbl SELECT 99, 'a99', 20.0;\n\n-- Overwrite partitioned table with dynamic partition\nINSERT OVERWRITE TABLE hudi_cow_pt_tbl SELECT 10, 'a10', 1100, '2021-12-09', '10';\n\n-- Overwrite partitioned table with static partition\nINSERT OVERWRITE hudi_cow_pt_tbl PARTITION(dt = '2021-12-09', hh='12') SELECT 13, 'a13', 1100;\n")),(0,r.yg)("h3",{id:"update"},"Update"),(0,r.yg)("p",null,"You can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"UPDATE")," statement to modify existing data in a Hudi table directly. "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"UPDATE tableIdentifier SET column = EXPRESSION(,column = EXPRESSION) [ WHERE boolExpression]\n")),(0,r.yg)("p",null,"Here's an example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"-- Update data in a Hudi table\nUPDATE hudi_mor_tbl SET price = price * 2, ts = 1111 WHERE id = 1;\n\n-- Update data in a partitioned Hudi table\nUPDATE hudi_cow_pt_tbl SET name = 'a1_1', ts = 1001 WHERE id = 1;\n\n-- update using non-PK field\nupdate hudi_cow_pt_tbl set ts = 1001 where name = 'a1';\n")),(0,r.yg)("div",{className:"admonition admonition-info alert alert--info"},(0,r.yg)("div",{parentName:"div",className:"admonition-heading"},(0,r.yg)("h5",{parentName:"div"},(0,r.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,r.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.yg)("div",{parentName:"div",className:"admonition-content"},(0,r.yg)("p",{parentName:"div"},"The ",(0,r.yg)("inlineCode",{parentName:"p"},"UPDATE")," operation requires the specification of a ",(0,r.yg)("inlineCode",{parentName:"p"},"preCombineField"),"."))),(0,r.yg)("h3",{id:"merge-into"},"Merge Into"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"MERGE INTO")," statement allows you to perform more complex updates and merges against source data. The ",(0,r.yg)("inlineCode",{parentName:"p"},"MERGE INTO")," statement\nis similar to the ",(0,r.yg)("inlineCode",{parentName:"p"},"UPDATE")," statement, but it allows you to specify different actions for matched and unmatched records."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"MERGE INTO tableIdentifier AS target_alias\nUSING (sub_query | tableIdentifier) AS source_alias\nON <merge_condition>\n[ WHEN MATCHED [ AND <condition> ] THEN <matched_action> ]\n[ WHEN NOT MATCHED [ AND <condition> ]  THEN <not_matched_action> ]\n\n<merge_condition> =A equal bool condition \n<matched_action>  =\n  DELETE  |\n  UPDATE SET *  |\n  UPDATE SET column1 = expression1 [, column2 = expression2 ...]\n<not_matched_action>  =\n  INSERT *  |\n  INSERT (column1 [, column2 ...]) VALUES (value1 [, value2 ...])\n")),(0,r.yg)("p",null,"Examples below"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"-- source table using hudi for testing merging into non-partitioned table\ncreate table merge_source (id int, name string, price double, ts bigint) using hudi\ntblproperties (primaryKey = 'id', preCombineField = 'ts');\ninsert into merge_source values (1, \"old_a1\", 22.22, 900), (2, \"new_a2\", 33.33, 2000), (3, \"new_a3\", 44.44, 2000);\n\nmerge into hudi_mor_tbl as target\nusing merge_source as source\non target.id = source.id\nwhen matched then update set *\nwhen not matched then insert *\n;\n\n-- source table using parquet for testing merging into partitioned table\ncreate table merge_source2 (id int, name string, flag string, dt string, hh string) using parquet;\ninsert into merge_source2 values (1, \"new_a1\", 'update', '2021-12-09', '10'), (2, \"new_a2\", 'delete', '2021-12-09', '11'), (3, \"new_a3\", 'insert', '2021-12-09', '12');\n\nMERGE into hudi_cow_pt_tbl as target\nusing (\n  select id, name, '1000' as ts, flag, dt, hh from merge_source2\n) source\non target.id = source.id\nwhen matched and flag != 'delete' then\n update set id = source.id, name = source.name, ts = source.ts, dt = source.dt, hh = source.hh\nwhen matched and flag = 'delete' then delete\nwhen not matched then\n insert (id, name, ts, dt, hh) values(source.id, source.name, source.ts, source.dt, source.hh)\n;\n\n")),(0,r.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.yg)("div",{parentName:"div",className:"admonition-heading"},(0,r.yg)("h5",{parentName:"div"},(0,r.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,r.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Key requirements")),(0,r.yg)("div",{parentName:"div",className:"admonition-content"},(0,r.yg)("p",{parentName:"div"},"For a Hudi table with user configured primary keys, the join condition in ",(0,r.yg)("inlineCode",{parentName:"p"},"Merge Into")," is expected to contain the primary keys of the table.\nFor a Table where Hudi auto generates primary keys, the join condition in MIT can be on any arbitrary data columns."))),(0,r.yg)("h3",{id:"delete-from"},"Delete From"),(0,r.yg)("p",null,"You can remove data from a Hudi table using the ",(0,r.yg)("inlineCode",{parentName:"p"},"DELETE FROM")," statement."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"DELETE FROM tableIdentifier [ WHERE boolExpression ]\n")),(0,r.yg)("p",null,"Examples below"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"-- Delete data from a Hudi table\nDELETE FROM hudi_cow_nonpcf_tbl WHERE uuid = 1;\n\n-- Delete data from a MOR Hudi table based on a condition\nDELETE FROM hudi_mor_tbl WHERE id % 2 = 0;\n\n-- Delete data using a non-primary key field\nDELETE FROM hudi_cow_pt_tbl WHERE name = 'a1';\n")),(0,r.yg)("h3",{id:"data-skipping-and-indexing"},"Data Skipping and Indexing"),(0,r.yg)("p",null,"DML operations can be sped up using column statistics for data skipping and using indexes to reduce the amount of data scanned.\nFor e.g. the following helps speed up the ",(0,r.yg)("inlineCode",{parentName:"p"},"DELETE")," operation on a Hudi table, by using the record level index."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SET hoodie.enable.data.skipping=true;\nSET hoodie.metadata.record.index.enable=true;\nSET hoodie.metadata.enable=true;\n\nDELETE from hudi_table where uuid = 'c8abbe79-8d89-47ea-b4ce-4d224bae5bfa';\n")),(0,r.yg)("p",null,"These DML operations give you powerful tools for managing your tables using Spark SQL.\nYou can control the behavior of these operations using various configuration options, as explained in the documentation."),(0,r.yg)("h2",{id:"flink-sql"},"Flink SQL"),(0,r.yg)("p",null,"Flink SQL provides several Data Manipulation Language (DML) actions for interacting with Hudi tables. These operations allow you to insert, update and delete data from your Hudi tables. Let's explore them one by one."),(0,r.yg)("h3",{id:"insert-into-1"},"Insert Into"),(0,r.yg)("p",null,"You can utilize the INSERT INTO statement to incorporate data into a Hudi table using Flink SQL. Here are a few illustrative examples:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO <table> \nSELECT <columns> FROM <source>;\n")),(0,r.yg)("p",null,"Examples:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"-- Insert into a Hudi table\nINSERT INTO hudi_table SELECT 1, 'a1', 20;\n")),(0,r.yg)("p",null,"If the ",(0,r.yg)("inlineCode",{parentName:"p"},"write.operation")," is 'upsert,' the INSERT INTO statement will not only insert new records but also update existing rows with the same record key."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"-- Insert into a Hudi table in upsert mode\nINSERT INTO hudi_table/*+ OPTIONS('write.operation'='upsert')*/ SELECT 1, 'a1', 20;\n")),(0,r.yg)("h3",{id:"update-1"},"Update"),(0,r.yg)("p",null,"With Flink SQL, you can use update command to update the hudi table. Here are a few illustrative examples:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"UPDATE tableIdentifier SET column = EXPRESSION(,column = EXPRESSION) [ WHERE boolExpression]\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"UPDATE hudi_table SET price = price * 2, ts = 1111 WHERE id = 1;\n")),(0,r.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.yg)("div",{parentName:"div",className:"admonition-heading"},(0,r.yg)("h5",{parentName:"div"},(0,r.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,r.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Key requirements")),(0,r.yg)("div",{parentName:"div",className:"admonition-content"},(0,r.yg)("p",{parentName:"div"},"Update query only work with batch excution mode."))),(0,r.yg)("h3",{id:"delete-from-1"},"Delete From"),(0,r.yg)("p",null,"With Flink SQL, you can use delete command to delete the rows from hudi table. Here are a few illustrative examples:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"DELETE FROM tableIdentifier [ WHERE boolExpression ]\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"DELETE FROM hudi_table WHERE price < 100;\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"DELETE FROM hudi_table WHERE price < 100;\n")),(0,r.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.yg)("div",{parentName:"div",className:"admonition-heading"},(0,r.yg)("h5",{parentName:"div"},(0,r.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,r.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Key requirements")),(0,r.yg)("div",{parentName:"div",className:"admonition-content"},(0,r.yg)("p",{parentName:"div"},"Delete query only work with batch excution mode."))),(0,r.yg)("h3",{id:"setting-writerreader-configs"},"Setting Writer/Reader Configs"),(0,r.yg)("p",null,"With Flink SQL, you can additionally set the writer/reader writer configs along with the query."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO hudi_table/*+ OPTIONS('${hoodie.config.key1}'='${hoodie.config.value1}')*/\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO hudi_table/*+ OPTIONS('hoodie.keep.max.commits'='true')*/\n")),(0,r.yg)("h2",{id:"flink-sql-in-action"},"Flink SQL In Action"),(0,r.yg)("p",null,"The hudi-flink module defines the Flink SQL connector for both hudi source and sink.\nThere are a number of options available for the sink table:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Option Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Remarks"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"path"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"N/A"),(0,r.yg)("td",{parentName:"tr",align:null},"Base path for the target hoodie table. The path would be created if it does not exist, otherwise a hudi table expects to be initialized successfully")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"table.type"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"COPY_ON_WRITE"),(0,r.yg)("td",{parentName:"tr",align:null},"Type of table to write. COPY_ON_WRITE (or) MERGE_ON_READ")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"write.operation"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"upsert"),(0,r.yg)("td",{parentName:"tr",align:null},"The write operation, that this write should do (insert or upsert is supported)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"write.precombine.field"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"ts"),(0,r.yg)("td",{parentName:"tr",align:null},"Field used in preCombining before actual write. When two records have the same key value, we will pick the one with the largest value for the precombine field, determined by Object.compareTo(..)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"write.payload.class"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"OverwriteWithLatestAvroPayload.class"),(0,r.yg)("td",{parentName:"tr",align:null},"Payload class used. Override this, if you like to roll your own merge logic, when upserting/inserting. This will render any value set for the option in-effective")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"write.insert.drop.duplicates"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"Flag to indicate whether to drop duplicates upon insert. By default insert will accept duplicates, to gain extra performance")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"write.ignore.failed"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},"Flag to indicate whether to ignore any non exception error (e.g. writestatus error). within a checkpoint batch. By default true (in favor of streaming progressing over data integrity)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"hoodie.datasource.write.recordkey.field"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"uuid"),(0,r.yg)("td",{parentName:"tr",align:null},"Record key field. Value to be used as the ",(0,r.yg)("inlineCode",{parentName:"td"},"recordKey")," component of ",(0,r.yg)("inlineCode",{parentName:"td"},"HoodieKey"),". Actual value will be obtained by invoking .toString() on the field value. Nested fields can be specified using the dot notation eg: ",(0,r.yg)("inlineCode",{parentName:"td"},"a.b.c"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"hoodie.datasource.write.keygenerator.class"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"SimpleAvroKeyGenerator.class"),(0,r.yg)("td",{parentName:"tr",align:null},"Key generator class, that implements will extract the key out of incoming record")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"write.tasks"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"4"),(0,r.yg)("td",{parentName:"tr",align:null},"Parallelism of tasks that do actual write, default is 4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"write.batch.size.MB"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"128"),(0,r.yg)("td",{parentName:"tr",align:null},"Batch buffer size in MB to flush data into the underneath filesystem")))),(0,r.yg)("p",null,"If the table type is MERGE_ON_READ, you can also specify the asynchronous compaction strategy through options:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Option Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Remarks"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"compaction.async.enabled"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},"Async Compaction, enabled by default for MOR")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"compaction.trigger.strategy"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"num_commits"),(0,r.yg)("td",{parentName:"tr",align:null},"Strategy to trigger compaction, options are 'num_commits': trigger compaction when reach N delta commits; 'time_elapsed': trigger compaction when time elapsed > N seconds since last compaction; 'num_and_time': trigger compaction when both NUM_COMMITS and TIME_ELAPSED are satisfied; 'num_or_time': trigger compaction when NUM_COMMITS or TIME_ELAPSED is satisfied. Default is 'num_commits'")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"compaction.delta_commits"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"5"),(0,r.yg)("td",{parentName:"tr",align:null},"Max delta commits needed to trigger compaction, default 5 commits")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"compaction.delta_seconds"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"3600"),(0,r.yg)("td",{parentName:"tr",align:null},"Max delta seconds time needed to trigger compaction, default 1 hour")))),(0,r.yg)("p",null,"You can write the data using the SQL ",(0,r.yg)("inlineCode",{parentName:"p"},"INSERT INTO")," statements:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO hudi_table select ... from ...; \n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Note"),": INSERT OVERWRITE is not supported yet but already on the roadmap."),(0,r.yg)("h3",{id:"non-blocking-concurrency-control-experimental"},"Non-Blocking Concurrency Control (Experimental)"),(0,r.yg)("p",null,"Hudi Flink supports a new non-blocking concurrency control mode, where multiple writer tasks can be executed\nconcurrently without blocking each other. One can read more about this mode in\nthe ",(0,r.yg)("a",{parentName:"p",href:"/docs/next/concurrency_control#model-c-multi-writer"},"concurrency control")," docs. Let us see it in action here."),(0,r.yg)("p",null,"In the below example, we have two streaming ingestion pipelines that concurrently update the same table. One of the\npipeline is responsible for the compaction and cleaning table services, while the other pipeline is just for data\ningestion."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"-- set the interval as 30 seconds\nexecution.checkpointing.interval: 30000\nstate.backend: rocksdb\n\n-- This is a datagen source that can generates records continuously\nCREATE TABLE sourceT (\n    uuid varchar(20),\n    name varchar(10),\n    age int,\n    ts timestamp(3),\n    `partition` as 'par1'\n) WITH (\n    'connector' = 'datagen',\n    'rows-per-second' = '200'\n);\n\n-- pipeline1: by default enable the compaction and cleaning services\nCREATE TABLE t1(\n    uuid varchar(20),\n    name varchar(10),\n    age int,\n    ts timestamp(3),\n    `partition` varchar(20)\n) WITH (\n    'connector' = 'hudi',\n    'path' = '/Users/chenyuzhao/workspace/hudi-demo/t1',\n    'table.type' = 'MERGE_ON_READ',\n    'index.type' = 'BUCKET',\n    'hoodie.write.concurrency.mode' = 'NON_BLOCKING_CONCURRENCY_CONTROL',\n    'write.tasks' = '2'\n);\n\n-- pipeline2: disable the compaction and cleaning services manually\nCREATE TABLE t1_2(\n    uuid varchar(20),\n    name varchar(10),\n    age int,\n    ts timestamp(3),\n    `partition` varchar(20)\n) WITH (\n    'connector' = 'hudi',\n    'path' = '/Users/chenyuzhao/workspace/hudi-demo/t1',\n    'table.type' = 'MERGE_ON_READ',\n    'index.type' = 'BUCKET',\n    'hoodie.write.concurrency.mode' = 'NON_BLOCKING_CONCURRENCY_CONTROL',\n    'write.tasks' = '2',\n    'compaction.schedule.enabled' = 'false',\n    'compaction.async.enabled' = 'false',\n    'clean.async.enabled' = 'false'\n);\n\n-- submit the pipelines\ninsert into t1 select * from sourceT;\ninsert into t1_2 select * from sourceT;\n\nselect * from t1 limit 20;\n")),(0,r.yg)("p",null,"As you can see from the above example, we have two pipelines with multiple tasks that concurrently write to the\nsame table. To use the new concurrency mode, all you need to do is set the ",(0,r.yg)("inlineCode",{parentName:"p"},"hoodie.write.concurrency.mode"),"\nto ",(0,r.yg)("inlineCode",{parentName:"p"},"NON_BLOCKING_CONCURRENCY_CONTROL"),". The ",(0,r.yg)("inlineCode",{parentName:"p"},"write.tasks")," option is used to specify the number of write tasks that will\nbe used for writing to the table. The ",(0,r.yg)("inlineCode",{parentName:"p"},"compaction.schedule.enabled"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"compaction.async.enabled"),"\nand ",(0,r.yg)("inlineCode",{parentName:"p"},"clean.async.enabled")," options are used to disable the compaction and cleaning services for the second pipeline.\nThis is done to ensure that the compaction and cleaning services are not executed twice for the same table."))}c.isMDXComponent=!0}}]);