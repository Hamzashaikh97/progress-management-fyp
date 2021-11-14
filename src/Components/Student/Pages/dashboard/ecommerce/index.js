/**
 * Ecommerce Dashboard
 */

 import React, { useEffect } from 'react'
 import { Helmet } from "react-helmet";
 // intl messages
 import IntlMessages from 'Util/IntlMessages';
import PageTitleBar from "../../../../../lib/vendor/PageTitleBar/PageTitleBar";
 import firebase from '../../../../../config/firebase';
 // page title bar
 
 // rct collapsible card
 import RctCollapsibleCard from 'lib/admin/RctCollapsibleCard/RctCollapsibleCard';
 
import { useParams } from 'react-router'; 
 
 
 export default function EcommerceDashboard(props) {

   const {id}=useParams();
   
   var newid;
   useEffect(async()=>{
     newid=id.replace(".","*");
     newid=newid.replace(".","*");
     console.log(newid)
      await firebase.database().ref('/StudentData').child(newid).once('value',function(data){
          console.log(data.val())
        })
   },[])

    return (
       <div className="ecom-dashboard-wrapper">
          {/* <Helmet>
             <title>PMP </title>
             <meta name="description" content="Reactify Ecommerce Dashboard" />
          </Helmet> */}
            <PageTitleBar title='Dashboard' match={props.match} />
       </div>
    )
 }
 