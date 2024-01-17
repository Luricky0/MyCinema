import React from 'react';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, message, Space, Tooltip } from 'antd';

const items = [
    {
        label: '动作',
        key: 'action',
    },
    {
        label: '科幻',
        key: 'scific',
    },
    {
        label: '言情',
        key: 'romance',
    },
    {
        label: '喜剧',
        key: 'comedy',
    }
];

const Comp = ({handleButtonClick}) => {
    const handleMenuClick = (e) => {
        const listType="genre/"+e.key
        handleButtonClick(3,listType)
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
                        按电影种类展示
                        <DownOutlined />
                    </Space>
                </Button>
            </Dropdown>
        </Space>
    );
}
export default Comp;