var HtmlWebpackPlugin=require("html-webpack-plugin");
var path=require("path");
module.exports={
	entry:path.resolve(__dirname,"src/main.js"),
	output:{
		path:path.resolve(__dirname,"dist"),
		filename:"[name]_bundle.js"
	},
	module:{
		rules:[{
			test:/\.js$/,
			loader:"babel-loader",
			include:path.resolve(__dirname,"src"),
			query:{
				presets:["es2015"]
			}
		},{
			test:/\.vue/,
			loader:"vue-loader"
		}]
	},
	resolve:{
		extensions:[".js",".vue"],
		alias:{
			"vue$":"vue/dist/vue.esm.js"
		}
	},
	plugins:[
       new HtmlWebpackPlugin({
       	filename:"index.html",
       	template:path.resolve(__dirname,"src/index.html"),
       	inject:true
       })
	]
}