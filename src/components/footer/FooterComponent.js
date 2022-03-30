
import { Row, Col } from 'reactstrap'
const FooterComponent = () => {
    return (
        <>
            <div className="footer">
                <Row className='mt-2'>
                    <Col className='text-center' xs='4'>
                        <img src='https://hihihi.vn/api/assets/logo.png' alt='logo' style={{ maxWidth: 120 }} /></Col>
                    <Col></Col>
                </Row>
                <Row className=' p-2'>
                    <Col xs='7'>
                        <Row className='mt-2 p-2'>
                            <b>CÔNG TY CỔ PHẦN VÀ ĐẦU TƯ SẢN XUẤT HOÀNG SA</b>
                        </Row>
                        <Row className='mt-2 p-2'>
                            <Col xs='3'>
                                <p>Mã số thuế:</p>
                                <p>Địa chỉ:</p>
                                <p>Điện thoại:</p>
                            </Col>
                            <Col xs='9'>
                                <p>0107747933</p>
                                <p>Xóm Hàng Gậu, Đội 7, xã Chàng Sơn, huyện Thạch Thất, thành phố Hà Nội, Việt Nam</p>
                                <p>0938895622</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs='5'>
                        <Row className='p-2'>
                            <Col>
                                <b>HHIHI VIỆT NAM</b>
                                <p>Giới thiệu HiHiHi</p>
                                <p>Thông tin hỗ trợ</p>
                                <p>Thông tin tuyển dụng</p>
                            </Col>
                            <Col>
                                <b>Chính sách</b>
                                <p>Chính sách nhà cung cấp</p>
                                <p>Chính sách khách hàng</p>
                                <p>Chính sách Dropship</p>
                            </Col>
                            <Col>
                                <b>Giao dịch - tài chính</b>
                                <p>Giao dịch an toàn</p>
                                <p>Bảo hiểm hàng hóa</p>
                                <p>Kết nối - hợp tác</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <hr />
                <Row className='p-2'>
                    <Col xs='7'>
                        <p>Địa chỉ Miền Nam: Số 515B, Lê Trọng Tấn, Sơn Kỳ, Tân Phú, Tp Hồ Chí Minh. Miền Bắc: Hà Đông, Hà Nội</p>
                        <p>HIHIHI cung cấp giải pháp giao dịch thương mại điện tử dành cho thị trường sỉ trong và ngoài nước</p>
                        <p>Giấy chứng nhận Đăng ký Kinh doanh số 0107747933 do Sở Kế Hoạch và Đầu Tư Thành Phố Hà Nội cấp ngày 07 tháng 03 năm 2017</p>
                        <p>2021 - Bản quyền của Công Ty Cổ Phần Đầu Tư và Sản Xuất Hoàng Sa</p>
                        <img src='https://dangkywebvoibocongthuong.com/wp-content/uploads/2021/11/logo-da-thong-bao-bo-cong-thuong.png' alt='logoBCT' style={{ maxWidth: '30%' }} />
                    </Col>
                    <Col xs='5'>
                        <Row>
                            <Col xs='4'>
                                <b>Mạng xã hội</b>
                                <Row>
                                    <Col xs='3'>
                                        <img src='https://s3.ap-northeast-1.wasabisys.com/admin-order/2022/02/24/59b67105-642c-401a-b0de-22b1ee05c040/Frame 2.png' style={{ height: 30, width: 30 }} />
                                    </Col>
                                    <Col xs='3'>
                                        <img src='https://s3.ap-northeast-1.wasabisys.com/admin-order/2022/02/26/52ec6ed4-0c3d-4dae-aa68-02704c39c98e/Frame 4.png' style={{ height: 30, width: 30 }} />
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs='8'>
                                <b>Thanh toán</b>
                                <Row>
                                    <Col>
                                        <img src='https://d29fhpw069ctt2.cloudfront.net/icon/image/38833/preview.svg' style={{ width: 50, height: 50, borderRadius: '20%', border: '1px', padding: '5px', backgroundColor: '#fff' }} />
                                    </Col>
                                    <Col>
                                        <img src='https://cdn0.iconfinder.com/data/icons/shift-ecommerce/32/Master_Card-128.png' style={{ width: 50, height: 50, borderRadius: '20%', border: '1px', padding: '5px', backgroundColor: '#fff' }} />
                                    </Col>
                                    <Col>
                                        <img src='https://cdn3.iconfinder.com/data/icons/credit-cards-pos/1330/jcb-128.png' style={{ width: 50, height: 50, borderRadius: '20%', border: '1px', padding: '5px', backgroundColor: '#fff' }} />
                                    </Col>
                                    <Col>
                                        <img src='https://cdn3.iconfinder.com/data/icons/payment-method-1/64/_Paypal-39-128.png' style={{ width: 50, height: 50, borderRadius: '20%', border: '1px', padding: '5px', backgroundColor: '#fff' }} />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row className='mt-2 p-2'>
                            <b>Tải ứng dụng</b>
                        </Row>
                        <Row className='mt-2 p-2'>
                            <Col>
                                <img src='https://s3.ap-northeast-1.wasabisys.com/admin-order/2022/01/28/8d34e18f-2b14-46d6-a40d-2639aa939028/chplay.png' style={{ maxWidth: 160, borderRadius: 10 }} alt='ch-play' />
                            </Col>
                            <Col>
                                <img src='https://s3.ap-northeast-1.wasabisys.com/admin-order/2022/01/28/c9261702-2f1d-40a4-aa43-d8c0c28fa8a5/appstore.png' style={{ maxWidth: 160, borderRadius: 10 }} alt='appstore' />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </>
    )
}
export default FooterComponent