import React from "react";

import {danger} from "./layout.module.css"

interface LayoutProps {
    children: React.ReactNode,
    pageTitle?: String,
}

const Dashboard = (props:LayoutProps) => <main className={danger}>{props.children}</main>

export default Dashboard