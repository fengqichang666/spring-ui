<template>
	<div>
		<el-row>
			<el-col :span="8" :offset="8">
				<el-form
					ref="ruleFormRef"
					:model="ruleForm"
					:rules="rules"
					label-width="120px"
					class="demo-ruleForm"
					status-icon
				>
					<el-form-item label="用户" prop="username">
						<el-input v-model="ruleForm.username" placeholder="请输入"></el-input>
					</el-form-item>
					<el-form-item label="密码" prop="password">
						<el-input v-model="ruleForm.password" placeholder="请输入"></el-input>
					</el-form-item>
				</el-form>
			</el-col>
		</el-row>
		<el-row justify="center">
			<el-col :span="8" :offset="8">
				<el-space wrap>
					<el-button type="primary" @click="register">注册</el-button>
				</el-space>
			</el-col>
		</el-row>
	</div>
</template>

<script setup lang="ts">
	import { ref, onBeforeMount, onMounted, reactive } from 'vue'
	import { type FormInstance, type FormRules, ElMessageBox } from 'element-plus'
	import { Register } from '@/api/login'
	const ruleForm = reactive({
		username: '',
		password: ''
	})
	const rules = reactive<InstanceType<typeof FormRules>>({
		username: [{ trigger: 'blur', required: true }],
		password: [{ trigger: 'blur', required: true }]
	})
	const ruleFormRef = ref<InstanceType<typeof FormInstance>>()
	const register = () => {
		ruleFormRef.value.validate(async (res: Boolean) => {
			if (res) {
				const { status, message } = (await Register(ruleForm)) as any
				if (status !== 100) {
					ElMessageBox.alert(message, '系统提示')
				}
			}
		})
	}
</script>
<style scoped lang="less"></style>
