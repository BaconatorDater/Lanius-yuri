#Template for a baisic Defence card, copy the entire .tscn file to make an different one


class_name Card_Defense extends Node2D
#taken from https://www.youtube.com/watch?v=HF8A0OuyHho&list=PLcDZ15ZHgyZdfrDfFX5dHXzsz5S5a1a_r&index=1
@export var CardName: String = "Defend"
@export var CardDescription: String = "Gain 8 block, base cost: 1 energy"
@export var CardCost: int = 1
@export var CardImage: Node2D
@export var CardBlock: int = 8

#Labels Handling
@onready var CardNameLbl: Label = $CardName/CardName
@onready var CardDescLbl: Label = $CardDescription

#dunno if i can shove Labeling directly into _ready
func Labeling():
	CardNameLbl.set_text(CardName)
	CardDescLbl.set_text(CardDescription)
# Called when the node enters the scene tree for the first time.

func CardPlayed():
	if Input.is_action_just_pressed("Card2played"):
		print("CARD 2 (DEF_CARD_BAISIC) PLAYED")
	#Detects when a card is played or not
	
func _ready() -> void:
	CardNameLbl.set_text(CardName)
	CardDescLbl.set_text(CardDescription) 


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta: float) -> void:
	CardPlayed()
