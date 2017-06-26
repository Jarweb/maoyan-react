import React, {Component} from 'react'


class OrderForm extends Component {


	render() {
		const {order} = this.props 

		return (
			<div>
				<Header 
					title="确认订单" 
					left="返回" 
					leftHandle={this.leftHandle} />

				<div>支付剩余时间:</div>
				<div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div>票价</div>
				</div>

				<div>
					<div>手机</div>
				</div>

				<div>
					<div>退改签须知</div>
					<div>
						<p>开场时间24小时前，可免费改签</p>
						<p>开场时间60分钟前，改签手续3.0元/张</p>
						<p>影票实际支付金额小于手续费时无法改签</p>
						<p>开场时间24小时前，可免费退款</p>
						<p>开场时间60分钟前，退款手续费5.0元/张</p>
					</div>
				</div>

				<div>
					<div>还需要支付:</div>
					<div>确认支付</div>
				</div>
			</div>
		)
	}
}