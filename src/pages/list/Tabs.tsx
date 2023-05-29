import * as React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

interface tabsProps {
    titles: string[]
    children: React.ReactNode[] | null
}

const toTitleCase = (str: string) => {
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

const Tabs = ({children, titles}: tabsProps) => {
    const { search } = useLocation();
    const [activeTab, setActiveTab] = React.useState(0);
    const navigate = useNavigate();

    React.useEffect(() => {
        setActiveTab(Number(search.slice(1)));
    }, [search]);

    return (
        <div>
            <div className="flex space-x-5 border-b border-l border-r">
                {titles.map((title, index) => {
                    return (
                        <button
                            key={index}
                            className={`py-2 border-b-4 transition-colors px-4 duration-300 ${index === activeTab
                                ? "border-blue-500"
                                : "border-transparent hover:border-gray-200"
                                }`}
                            onClick={() => navigate('/navigator?' + index)}>
                            {toTitleCase(title)}
                        </button>
                    );
                })}
            </div>

            <div>
                {Array.isArray(children) ? children[activeTab] : children}
            </div>
        </div>
    )
}

export default Tabs;