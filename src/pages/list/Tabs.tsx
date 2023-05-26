import * as React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

interface tabsProps {
    titles: string[]
    children: React.ReactNode[] | null
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
            <div className="flex space-x-3 border-b">
                {titles.map((title, index) => {
                    return (
                        <button
                            key={index}
                            className={`py-2 border-b-4 transition-colors duration-300 ${index === activeTab
                                ? "border-teal-500"
                                : "border-transparent hover:border-gray-200"
                                }`}
                            onClick={() => navigate('/navigator?' + index)}>
                            {title}
                        </button>
                    );
                })}
            </div>

            <div className="py-4">
                {Array.isArray(children) ? children[activeTab] : children}
            </div>
        </div>
    )
}

export default Tabs;