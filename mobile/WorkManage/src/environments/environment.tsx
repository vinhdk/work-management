export const environment = {
    app: {
        name: "WorkManage",
        displayName: "WorkManage"
    },
    apiLink: {
        endPoint: 'https://work-management-10061997.appspot.com/',
        // endPoint: 'http://192.168.1.141:8888/',
        basic: {
            user: {
                main: 'api/User'
            },
            group: {
                main: 'api/Group'
            },
            work: {
                main: 'api/Work'
            },
            role: {
                main: 'api/Role'
            },
            notification: {
                main: 'api/Notification'
            }
        },
        extra: {
            auth: {
                main: 'api/Auth',
                token: 'api/Auth/Token',
                password: 'api/Auth/PassWord',
                avatar: 'api/Auth/Avatar'
            }
        }
    },
    color: {
        primary: "#3F51B5",
        accent: "#AF2923",
        containerBg: "#FFF",
        textColor: "#000",
        borderColor: "#ccc"
    },
    firebase: {
        storageUrl: "gs://work-management-10061997/",
        noneAvatar: "none.jpg"
    },
    router: {
        "App": {
            key: "App",
            routeNames: ["Core", "Auth"],
            routes: {
                "Auth": {
                    key: "Auth",
                    routeNames: ["Login", "Navigate"],
                    routes: {
                        "Login": {
                            key: "Login",
                            routenames: [],
                            routes: {}
                        },
                        "Navigate": {
                            key: "Navigate",
                            routenames: [],
                            routes: {}
                        }
                    }
                },
                "Core": {
                    key: "Core",
                    routeNames: ["Admin", "Manager", "User"],
                    routes: {
                        "Admin": {
                            key: "Admin",
                            routeNames: ["Dashboard", "Account", "Group"],
                            routes: {
                                "Dashboard": {
                                    key: "Dashboard",
                                    icon: "home",
                                    title: "Trang chủ",
                                    routeNames: ["DashboardHome"],
                                    routes: {
                                        "DashboardHome": {
                                            key: "DashboardHome",
                                            routeNames: [],
                                            routes: {}
                                        }
                                    }
                                },
                                "Account": {
                                    key: "Account",
                                    icon: "users",
                                    title: "Nhân sự",
                                    routeNames: ["AccountHome"],
                                    routes: {
                                        "AccountHome": {
                                            key: "AccountHome",
                                            routeNames: [],
                                            routes: {}
                                        }
                                    }
                                },
                                "Group": {
                                    key: "Group",
                                    icon: "campground",
                                    title: "Nhóm",
                                    routeNames: ["GroupHome"],
                                    routes: {
                                        "GroupHome": {
                                            key: "GroupHome",
                                            routeNames: [],
                                            routes: {}
                                        }
                                    }
                                },
                            }
                        },
                        "Manager": {
                            key: "Manager",
                            routeNames: ["Dashboard", "Group", "Work"],
                            routes: {
                                "Dashboard": {
                                    key: "Dashboard",
                                    icon: "home",
                                    title: "Trang chủ",
                                    routeNames: ["DashboardHome"],
                                    routes: {
                                        "DashboardHome": {
                                            key: "DashboardHome",
                                            routeNames: [],
                                            routes: {}
                                        }
                                    }
                                },
                                "Group": {
                                    key: "Group",
                                    icon: "campground",
                                    title: "Nhóm",
                                    routeNames: ["GroupHome"],
                                    routes: {
                                        "GroupHome": {
                                            key: "GroupHome",
                                            routeNames: [],
                                            routes: {}
                                        }
                                    }
                                },
                                "Work": {
                                    key: "Work",
                                    icon: "cog",
                                    title: "Công việc",
                                    routeNames: ["WorkHome"],
                                    routes: {
                                        "WorkHome": {
                                            key: "WorkHome",
                                            routeNames: [],
                                            routes: {}
                                        }
                                    }
                                },
                            }
                        },
                        "User": {
                            key: "User",
                            routeNames: ["Dashboard", "Work"],
                            routes: {
                                "Dashboard": {
                                    key: "Dashboard",
                                    icon: "home",
                                    title: "Trang chủ",
                                    routeNames: ["DashboardHome"],
                                    routes: {
                                        "DashboardHome": {
                                            key: "DashboardHome",
                                            routeNames: [],
                                            routes: {}
                                        }
                                    }
                                },
                                "Work": {
                                    key: "Work",
                                    icon: "cog",
                                    title: "Công việc",
                                    routeNames: ["WorkHome"],
                                    routes: {
                                        "WorkHome": {
                                            key: "WorkHome",
                                            routeNames: [],
                                            routes: {}
                                        }
                                    }
                                },
                            }
                        },
                    }
                }
            }
        }
    }
}