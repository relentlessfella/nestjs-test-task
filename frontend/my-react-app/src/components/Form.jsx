import React, { useState, useEffect } from 'react';
import { DatePicker, Form, Input, InputNumber, Select, Button } from 'antd';

const { TextArea } = Input;

const FormInput = ({ onFormSubmit }) => {
  const [form] = Form.useForm();

  const fetchSubmit = async (values) => {
    const response = await fetch('http://localhost:3000/expenses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        dateTime: values.dateTime,
        author: values.author,
        sum: values.sum,
        category: values.category,
        comment: values.comment || '',
      }),
    });
    console.log(response);
    onFormSubmit();
  };

  function print(values) {
    console.log(values.dateTime, values.author, values.sum, values.category, values.comment);
  }

  return (
    <>
      <Form
        form={form}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        style={{
          maxWidth: 1000,
          border: 'solid 1px black',
          borderRadius: 5,
          padding: 10,
        }}
        onFinish={fetchSubmit}
        autoComplete="off">
        <Form.Item
          label="Date Time"
          name="dateTime"
          className="left-align-message"
          rules={[
            {
              required: true,
              message: 'Please input your date!',
            },
          ]}>
          <DatePicker style={{ display: 'flex', justifyContent: 'start' }} />
        </Form.Item>
        <Form.Item
          label="Author"
          name="author"
          rules={[{ required: true, message: 'Please enter the author' }]}
          className="left-align-message">
          <Input />
        </Form.Item>
        <Form.Item
          label="Sum"
          name="sum"
          rules={[
            {
              required: true,
              message: 'Please input sum!',
            },
          ]}
          className="left-align-message">
          <InputNumber style={{ display: 'flex', justifyContent: 'start' }} />
        </Form.Item>
        <Form.Item
          label="Category"
          name="category"
          rules={[
            {
              required: true,
              message: 'Please enter category!',
            },
          ]}
          className="left-align-message">
          <Select
            rules={[
              {
                required: true,
                message: 'Please enter category!',
              },
            ]}
            className="left-align-message">
            <Select.Option value="food">food</Select.Option>
            <Select.Option value="shopping">shopping</Select.Option>
            <Select.Option value="entertainment">entertainment</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Comment" name="comment">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item style={{ display: 'flex', justifyContent: 'center' }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default FormInput;
