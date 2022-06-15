/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import { MENU_ITEMS } from '../../../constants/menu';
import "../../../assets/styles/fa-icons.css"

export class sidebar extends Component {
    state = { selectedPath: "1", mainmenu: [], menuItems: [] };
    onItemSelection = (arg, e) => {
        this.setState({ selectedPath: arg.path });
    };

    componentWillMount() {
        this.setState({
            mainmenu: MENU_ITEMS,
            menuItems: MENU_ITEMS
        })
    }
    componentDidMount() {
        var currentUrl = window.location.pathname;

        this.state.mainmenu.filter(items => {
            if (!items.children) {
                if (items.path === currentUrl)
                    this.setNavActive(items)
                return false
            }
            items.children.filter(subItems => {
                if (subItems.path === currentUrl)
                    this.setNavActive(subItems)
                if (!subItems.children) return false
                subItems.children.filter(subSubItems => {
                    if (subSubItems.path === currentUrl)
                        this.setNavActive(subSubItems)
                })
            })
        })
    }

    setNavActive(item) {
        const MENUITEMS = this.state.menuItems
        MENUITEMS.filter(menuItem => {
            if (menuItem != item)
                menuItem.active = false
            if (menuItem.children && menuItem.children.includes(item))
                menuItem.active = true
            if (menuItem.children) {
                menuItem.children.filter(submenuItems => {
                    if (submenuItems != item) {
                        submenuItems.active = false
                    }
                    if (submenuItems.children) {
                        submenuItems.children.map(childItem => {
                            childItem.active = false;
                        })
                        if (submenuItems.children.includes(item)) {
                            submenuItems.active = true
                            menuItem.active = true
                        }
                    }
                })
            }
        })
        item.active = !item.active

        this.setState({
            mainmenu: MENUITEMS
        })


    }

    render() {
        const mainmenu = this.state.mainmenu.map((menuItem, i) =>
            <li className={`${menuItem.active ? 'active' : ''}`} key={i}>
                {(menuItem.sidebartitle) ?
                    <div className="sidebar-title" style={{ color: "#ecf0f1" }}>{menuItem.sidebartitle}</div>
                    : ''}
                {(menuItem.type === 'sub') ?
                    <a className="sidebar-header " href="#/" onClick={() => this.setNavActive(menuItem)}>
                        <menuItem.icon color="#1abc9c" />
                        <span style={{ color: "#ecf0f1" }}>{menuItem.title}</span>
                        <i className="fa fa-angle-right pull-right"></i>
                    </a>
                    : ''}
                {(menuItem.type === 'link') ?
                    <Link
                        to={`${process.env.PUBLIC_URL}${menuItem.path}`}
                        className={`sidebar-header ${menuItem.active ? 'active' : ''}`}

                        onClick={() => this.setNavActive(menuItem)}
                    >
                        <menuItem.icon color="#1abc9c" /><span style={{ color: "#ecf0f1" }}>{menuItem.title}</span>
                        {menuItem.children ?
                            <i className="fa fa-angle-right pull-right"></i> : ''}
                    </Link>
                    : ''}
                {menuItem.children ?
                    <ul
                        className={`sidebar-submenu ${menuItem.active ? 'menu-open' : ''}`}
                        style={menuItem.active ? { opacity: 1, transition: 'opacity 500ms ease-in' } : {}}
                    >
                        {menuItem.children.map((childrenItem, index) =>
                            <li key={index} className={childrenItem.children ? childrenItem.active ? 'active' : '' : ''}>
                                {(childrenItem.type === 'sub') ?
                                    <a href="#/" onClick={() => this.setNavActive(childrenItem)} >
                                        <i className="fa fa-circle"></i>
                                        {/* <menuItem.icon color="#1abc9c" /> */}
                                        <span style={{ color: "#ecf0f1" }}>
                                            {childrenItem.title.split("_").join(" ")}
                                        </span>
                                        <i className="fa fa-angle-right pull-right"></i></a>
                                    : ''}

                                {(childrenItem.type === 'link') ?
                                    <Link
                                        to={`${process.env.PUBLIC_URL}${childrenItem.path}`}
                                        className={childrenItem.active ? 'active' : ''}
                                        onClick={() => this.setNavActive(childrenItem)}
                                    >
                                        <i className="fa fa-circle"></i>
                                        <span style={{ color: "#ecf0f1" }}>
                                            {childrenItem.title}
                                        </span>
                                    </Link>
                                    : ''}
                                {childrenItem.children ?
                                    <ul className={`sidebar-submenu ${childrenItem.active ? 'menu-open' : 'active'}`}>
                                        {childrenItem.children.map((childrenSubItem, key) =>
                                            <li className={childrenSubItem.active ? 'active' : ''} key={key}>
                                                {(childrenSubItem.type === 'link') ?
                                                    <Link
                                                        to={`${process.env.PUBLIC_URL}${childrenSubItem.path}`}
                                                        className={childrenSubItem.active ? 'active' : ''}
                                                        onClick={() => this.setNavActive(childrenSubItem)}
                                                    >
                                                        <i className="fa fa-circle"></i>
                                                        <span style={{ color: "#ecf0f1" }}>
                                                            {childrenSubItem.title.split("_").join(" ")}
                                                        </span>
                                                    </Link>
                                                    : ''}
                                            </li>
                                        )}
                                    </ul>
                                    : ''}
                            </li>
                        )}
                    </ul>
                    : ''}
            </li>
        )
        return (
            <Fragment>
                <div className="page-sidebar">
                    <div className="main-header-left d-none d-lg-block" style={{ backgroundColor: "#112225", color: "#ecf0f1FFF" }}>
                        <div className="logo-wrapper">
                            <h6 style={{ fontFamily: "Sans-serif, Arial", fontSize: "0.9rem", color: "#ecf0f1" }}>
                                Nutanix EUC 5.15 Lab Guide
                            </h6>
                        </div>
                    </div>
                    <div className="sidebar custom-scrollbar" style={{ backgroundColor: "#112225", color: "#ecf0f1FFF" }}>
                        <ul className="sidebar-menu">
                            {mainmenu}
                        </ul>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default sidebar
