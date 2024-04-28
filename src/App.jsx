/*
 * @Author: jiayinchu
 * @Date: 2024-04-28 20:42:33
 * @LastEditors: jiayinchu
 * @LastEditTime: 2024-04-28 21:57:54
 * @Description: file content
 */
import React, { Suspense, lazy } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';

const props = {
	name: 'file',
	action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
	headers: {
		authorization: 'authorization-text',
	},
	onChange(info) {
		if (info.file.status !== 'uploading') {
			console.log(info.file, info.fileList);
		}
		if (info.file.status === 'done') {
			message.success(`${info.file.name} file uploaded successfully`);
		} else if (info.file.status === 'error') {
			message.error(`${info.file.name} file upload failed.`);
		}
	},
};

function App() {
	return <Upload {...props}>
		<Button icon={<UploadOutlined />}>Click to Upload</Button>
	</Upload>
}

export default App;
