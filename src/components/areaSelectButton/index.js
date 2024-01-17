import React from 'react';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, message, Space, Tooltip } from 'antd';

const items = [
    {
        label: '大陆',
        key: 'mainland',
    },
    {
        label: '港台',
        key: 'hktw',
    },
    {
        label: '日韩',
        key: 'jpkr',
    },
    {
        label: '欧美',
        key: 'western',
    },

];

const Comp = ({handleButtonClick}) => {
    const handleMenuClick = (e) => {
        const listType="area/"+e.key
        handleButtonClick(3,listType);
    };
    const menuProps = {
        items,
        onClick: handleMenuClick,
    };
    return(
        <Space wrap>
            <Dropdown menu={menuProps}>
                <Button type={'text'}>
                    <Space>
                        按地区展示
                        <DownOutlined />
                    </Space>
                </Button>
            </Dropdown>
        </Space>
    );
}
export default Comp;