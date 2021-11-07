/**
 * Ecommerce Dashboard
 */

 import React from 'react'
 import { Helmet } from "react-helmet";
 // intl messages
 import IntlMessages from 'Util/IntlMessages';
import PageTitleBar from "../../../../../lib/vendor/PageTitleBar/PageTitleBar";
 
 // page title bar
 
 // rct collapsible card
 import RctCollapsibleCard from 'lib/admin/RctCollapsibleCard/RctCollapsibleCard';
 
 
 
 
 export default function EcommerceDashboard(props) {
    return (
       <div className="ecom-dashboard-wrapper">
          {/* <Helmet>
             <title>PMP </title>
             <meta name="description" content="Reactify Ecommerce Dashboard" />
          </Helmet> */}
            <PageTitleBar title='Teacher Dashboard' match={props.match} />
       </div>
    )
 }
 