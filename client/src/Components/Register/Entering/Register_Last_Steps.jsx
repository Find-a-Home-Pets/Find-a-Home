import React, { useState } from "react";
import {
	View,
	Text,
	Dimensions,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
	Image
} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { putUserData } from "../../../Redux/Actions";
//Again, Why?? 


const RegisterLastSteps = ({ route, navigation }) => {

	const {
		telefono,
		pais,
		departamento,
		provincia
	} = route.params

	const [userNewInput, setuserNewInput] = useState({
		telefono,
		pais,
		departamento,
		provincia,
		condiciones: {},
	})

	const [checkState, setCheckState] = useState({})

	const [accepted, setAccepted] = useState(false);

	const [loading, setLoading] = useState(false);

	const HandleCheck = (option) => {
		setCheckState({ ...checkState, [option]: !checkState[option] })
		setuserNewInput({ ...userNewInput, condiciones: { ...userNewInput.condiciones, [option]: !checkState[option]} })
	}
	const handleContinuar = () =>{
		setLoading(true)
		putUserData(userNewInput)
		.then(resp=>{
			navigation.navigate("Home")
		})
		.catch(err=>alert(err.message))
		.finally(e=>{
			setLoading(false)
		})

	}

	return (
		<ScrollView>
			<Image
				className="absolute top-[16px] right-[22] z-[1]"
				source={require("../../../images/logo-black.png")}
			/>
			<View className="h-screen items-center justify-center bg-[#FFC733]">
				<Text className="absolute top-[121px] w-auto mx-auto font-roboto font-light text-[90px] leading-auto flex items-center text-center">
					¡Bienvenido!
				</Text>
				<Text className="absolute top-[242px] w-[430px] mx-auto px-8 font-roboto font-[0] text-[38px] leading-auto flex items-center text-center">
					Que condiciones puedes ofrecer a tus mascotas?
				</Text>
{/* El cliente pidió que se haga un componente con estos botones, asi es escalable */}
				<TouchableOpacity onPress={() => HandleCheck("Techo")} className="mt-28">
					<Text className={checkState.Techo ?
						"bg-[#AB4E68] text-center text-[#FFF] text-[25px] min-w-auto h-[55px] rounded-[35px] p-[10px] px-6 m-[10px]"
						: "bg-[#d9d9d971] text-center text-[#0000004e] text-[25px] min-w-auto h-[55px] rounded-[35px] p-[10px] px-6 m-[10px]"}>
						Techo
					</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => HandleCheck("AlimentoBalanceado")}>
					<Text className={checkState.AlimentoBalanceado ?
						"bg-[#AB4E68] text-center text-[#FFF] text-[25px] min-w-auto h-[55px] rounded-[35px] p-[10px] px-6 m-[10px]"
						: "bg-[#d9d9d971] text-center text-[#0000004e] text-[25px] min-w-auto h-[55px] rounded-[35px] p-[10px] px-6 m-[10px]"}>
						Alimento Balanceado
					</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => HandleCheck("PaseosDiarios")}>
					<Text className={checkState.PaseosDiarios ?
						"bg-[#AB4E68] text-center text-[#FFF] text-[25px] min-w-auto h-[55px] rounded-[35px] p-[10px] px-6 m-[10px]"
						: "bg-[#d9d9d971] text-center text-[#0000004e] text-[25px] min-w-auto h-[55px] rounded-[35px] p-[10px] px-6 m-[10px]"}>
						Paseos Diarios
					</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => HandleCheck("Vacunas")}>
					<Text className={checkState.Vacunas ?
						"bg-[#AB4E68] text-center text-[#FFF] text-[25px] min-w-auto h-[55px] rounded-[35px] p-[10px] px-6 m-[10px]"
						: "bg-[#d9d9d971] text-center text-[#0000004e] text-[25px] min-w-auto h-[55px] rounded-[35px] p-[10px] px-6 m-[10px]"}>
						Vacunas
					</Text>
				</TouchableOpacity>

				<View className="flex flex-row justify-center content-center items-center w-48 mr-[30%] -bottom-16">
					<View className="w-7 h-7">
						<TouchableOpacity onPress={() => setAccepted(!accepted)}>
							<Text className={accepted ? 
								"bg-[#AB4E68] text-[#FFF] border-2 border-[#AB4E68] text-center text-[20px] rounded-[5px] m-0.5 overflow-visible" 
								: "bg-[#d9d9d971] text-[#0000004e] border-2 border-[#AB4E68] text-center text-[20px] rounded-[5px] m-0.5" }>
									{accepted && "✔"}
							</Text>
						</TouchableOpacity>
					</View>

					<View className="flex flex-row left-2">
						<Text>
							Acepto
						</Text>
						<TouchableOpacity onPress={() => console.log('terms link here')}>
							<Text className="text-[#AB4E68]"> Terminos y condiciones</Text>
						</TouchableOpacity>
					</View>
				</View>

			</View>
		{accepted ? 
			loading ? <TouchableOpacity
			onPress={() => {
				
			}}
		>
			<Text className="absolute bottom-[50px] right-[28px] text-[36px]">
				Cargando...
			</Text>
		</TouchableOpacity>: <TouchableOpacity
				onPress={() => {
					handleContinuar()
				}}
			>
				<Text className="absolute bottom-[50px] right-[28px] text-[36px]">
					Continuar
				</Text>
			</TouchableOpacity>
			
			:
			<Text className="absolute bottom-[50px] right-[28px] text-[18px]">
				Debe aceptar los términos y Condiciones para continuar.
			</Text>
			}

		</ScrollView>
	)
}

export default RegisterLastSteps;