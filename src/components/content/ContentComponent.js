import { Row, Col, Label, Input, Button, Form, FormGroup } from 'reactstrap'
const ContentComponent = () => {
    return (
        <>
            <Row className='mt-2 p-2'>
                <Col xs='7'>
                    <Form className='login'>
                        <FormGroup>
                            <Label><span style={{ color: 'red' }}>* </span>Tài khoản</Label>
                            <Input style={{ padding: 10, borderRadius: 10 }} placeholder='Số điện thoại đăng nhập'></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label><span style={{ color: 'red' }}>* </span>Mật khẩu</Label>
                            <Input type='password' style={{ padding: 10, borderRadius: 10 }} placeholder='Mật khẩu'></Input>
                        </FormGroup>
                        <FormGroup style={{ textAlign: 'right' }}>
                            <a href='#' style={{ textDecoration: 'none' }}>Quên mật khẩu</a>
                        </FormGroup>
                        <FormGroup>
                            <Button color='primary' style={{ width: '100%', padding: 10, borderRadius: 10 }}>Đăng nhập</Button>
                        </FormGroup>
                        <FormGroup className='text-center'>
                            <p>Bằng việc đăng nhập, bạn đã đồng ý với Hihihi về <br />
                                <a href='#' className='dieukhoan'> Điều khoản dịch vụ</a> & <a href='#' className='dieukhoan'>Chính sách bảo mật</a></p>

                        </FormGroup>
                    </Form>
                </Col>
                <Col xs='5'>
                    <Form className='loginContainer text-center'>
                        <FormGroup>
                            <Label>HOẶC</Label>
                        </FormGroup>
                        <FormGroup>
                            <Button className='btnLogin' style={{ width: '100%' }}>
                                <img src='https://s3.ap-northeast-1.wasabisys.com/admin-order/2022/02/24/59b67105-642c-401a-b0de-22b1ee05c040/Frame 2.png' style={{ height: 30, width: 30 }} />
                                <span> Đăng nhập bằng Facebook</span>
                            </Button>
                        </FormGroup>
                        <FormGroup>

                            <Button className='btnLogin' style={{ width: '100%' }}>
                                <img src='https://s3.ap-northeast-1.wasabisys.com/admin-order/2022/02/24/6d0bd7ea-25c6-4cfb-9b61-f27ca29b35e8/Frame 3.png' style={{ height: 30, width: 30 }} />
                                <span> Đăng nhập bằng Google</span>
                            </Button>
                        </FormGroup>
                        <FormGroup>
                            <Button className='btnLogin' style={{ width: '100%' }}>
                                <img src='https://s3.ap-northeast-1.wasabisys.com/admin-order/2022/03/12/e836a636-b7fd-43e9-aebb-3d70a058799a/image 11 1.png' style={{ height: 30, width: 30 }} />
                                <span> Đăng nhập bằng Apple</span>
                            </Button>
                        </FormGroup>
                        <FormGroup>
                            <Label>Chưa có tài khoản ?</Label>
                        </FormGroup>
                        <FormGroup>

                            <Button className='btnLogin'>Đăng ký</Button>
                        </FormGroup>
                    </Form>
                </Col>
                
            </Row>
        </>
    )
}
export default ContentComponent