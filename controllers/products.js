import { user } from "../model/products.js";

export const getAllProducts = async(req,res)=>{
  const {company,name,featured,rating,sort,select}=req.query;
  const queryObj={};
  if(company){
    queryObj.company = company;
  }
  if(featured){
    queryObj.featured = featured;
  }
  if(rating){
    queryObj.rating = rating;
  }
  if(name){
    queryObj.name={$regex:name,$options: "i"};
  }

  let apiData=user.find(queryObj);
  if(sort){
    let sortFix=sort.split(",").join(" ");
    apiData=apiData.sort(sortFix);
  }
  if(select){
    let selectFix=select.split(",").join(" ");
    apiData=apiData.select(selectFix);
  }

  let page=Number(req.query.page)||1;
  let limit=Number(req.query.limit)|| 5;
  let skip=(page-1)*limit;
  const data =  await apiData.skip(skip).limit(limit);
  const nBits=data.length;
  res.status(200).json({data,"length":nBits},);
}

export const getAllProductsTesting = async(req,res)=>{
  const {company,name,featured,rating,sort,select}=req.query;
  const queryObj={};
  if(company){
    queryObj.company = company;
  }
  if(featured){
    queryObj.featured = featured;
  }
  if(rating){
    queryObj.rating = rating;
  }
  if(name){
    queryObj.name={$regex:name,$options: "i"};
  }

  let apiData=user.find(queryObj);
  if(sort){
    let sortFix=sort.split(",").join(" ");
    apiData=apiData.sort(sortFix);
  }
  if(select){
    let selectFix=select.split(",").join(" ");
    apiData=apiData.select(selectFix);
  }

  let page=Number(req.query.page)||1;
  let limit=Number(req.query.limit)|| 5;
  let skip=(page-1)*limit;
  const data =  await apiData.skip(skip).limit(limit);
  const nBits=data.length;
  res.status(200).json({data,"length":nBits},);
}