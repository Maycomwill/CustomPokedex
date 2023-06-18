import React from "react";
import theme from "../../styles/theme";
import { Container } from "./styles";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Popover,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Button } from "../Button/Button";
import { CircleButton } from "../Button/CircleButton";
import { Funnel } from "phosphor-react";
import { usePokedex } from "../../hooks/usePokedex";

export function DropMenu() {
  const {handleFilterGenType} = usePokedex();

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [typeFilter, setTypeFilter] = React.useState<string>("");

  let typeFiltered = ""

  const handleTypeFilterChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTypeFilter(event.target.value);
    typeFiltered = event.target.value
    handleFilterGenType(typeFiltered)
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  React.useEffect(()=>{
    // console.log("Type filtered: ", typeFilter)
  },[typeFilter])

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Container>
      <CircleButton onClick={handleClick}>
        <Funnel size={28} />
      </CircleButton>
      {/* <Button onClick={handleClick} /> */}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        sx={{
          ".MuiPaper-elevation8": {
            p: ".8rem",
            width: "30rem",
            height: "30rem",
            backgroundColor: `${theme.colors.gray[200]}`,
            color: `${theme.colors.gray[800]}`,
            fontSize: `${theme.fontSize.xxl}`,
          },
        }}
      >
        <div className="formControlDiv">
          <FormControl>
            <FormLabel
              id="filter-label"
              sx={{
                color: `${theme.colors.gray[800]}`,
                fontSize: `${theme.fontSize.md}`,
              }}
            >
              Type filter:
            </FormLabel>
            <RadioGroup
              aria-labelledby="filter-group-option"
              name="controlled-radio-buttons-group"
              value={typeFilter}
              onChange={handleTypeFilterChange}
            >
              <FormControlLabel
                value=""
                control={
                  <Radio
                    sx={{
                      color: theme.colors.accent[500],
                      "&.Mui-checked": {
                        color: theme.colors.primary[500],
                      },
                    }}
                  />
                }
                label="Zerar filtro"
              />
              <FormControlLabel
                value="bug"
                control={
                  <Radio
                    sx={{
                      color: theme.colors.accent[500],
                      "&.Mui-checked": {
                        color: theme.colors.primary[500],
                      },
                    }}
                  />
                }
                label="Bug"
              />
              <FormControlLabel
                value="dark"
                control={
                  <Radio
                    sx={{
                      color: theme.colors.accent[500],
                      "&.Mui-checked": {
                        color: theme.colors.primary[500],
                      },
                    }}
                  />
                }
                label="Dark"
              />
              <FormControlLabel
                value="dragon"
                control={
                  <Radio
                    sx={{
                      color: theme.colors.accent[500],
                      "&.Mui-checked": {
                        color: theme.colors.primary[500],
                      },
                    }}
                  />
                }
                label="Dragon"
              />
              <FormControlLabel
                value="electric"
                control={
                  <Radio
                    sx={{
                      color: theme.colors.accent[500],
                      "&.Mui-checked": {
                        color: theme.colors.primary[500],
                      },
                    }}
                  />
                }
                label="Electric"
              />
              <FormControlLabel
                value="fairy"
                control={
                  <Radio
                    sx={{
                      color: theme.colors.accent[500],
                      "&.Mui-checked": {
                        color: theme.colors.primary[500],
                      },
                    }}
                  />
                }
                label="Fairy"
              />
              <FormControlLabel
                value="fighting"
                control={
                  <Radio
                    sx={{
                      color: theme.colors.accent[500],
                      "&.Mui-checked": {
                        color: theme.colors.primary[500],
                      },
                    }}
                  />
                }
                label="Fighting"
              />
              <FormControlLabel
                value="fire"
                control={
                  <Radio
                    sx={{
                      color: theme.colors.accent[500],
                      "&.Mui-checked": {
                        color: theme.colors.primary[500],
                      },
                    }}
                  />
                }
                label="Fire"
              />
              <FormControlLabel
                value="flying"
                control={
                  <Radio
                    sx={{
                      color: theme.colors.accent[500],
                      "&.Mui-checked": {
                        color: theme.colors.primary[500],
                      },
                    }}
                  />
                }
                label="Flying"
              />
              <FormControlLabel
                value="ghost"
                control={
                  <Radio
                    sx={{
                      color: theme.colors.accent[500],
                      "&.Mui-checked": {
                        color: theme.colors.primary[500],
                      },
                    }}
                  />
                }
                label="Ghost"
              />
              <FormControlLabel
                value="grass"
                control={
                  <Radio
                    sx={{
                      color: theme.colors.accent[500],
                      "&.Mui-checked": {
                        color: theme.colors.primary[500],
                      },
                    }}
                  />
                }
                label="Grass"
              />
              <FormControlLabel
                value="ground"
                control={
                  <Radio
                    sx={{
                      color: theme.colors.accent[500],
                      "&.Mui-checked": {
                        color: theme.colors.primary[500],
                      },
                    }}
                  />
                }
                label="Ground"
              />
              <FormControlLabel
                value="ice"
                control={
                  <Radio
                    sx={{
                      color: theme.colors.accent[500],
                      "&.Mui-checked": {
                        color: theme.colors.primary[500],
                      },
                    }}
                  />
                }
                label="Ice"
              />
              <FormControlLabel
                value="normal"
                control={
                  <Radio
                    sx={{
                      color: theme.colors.accent[500],
                      "&.Mui-checked": {
                        color: theme.colors.primary[500],
                      },
                    }}
                  />
                }
                label="Normal"
              />
              <FormControlLabel
                value="poison"
                control={
                  <Radio
                    sx={{
                      color: theme.colors.accent[500],
                      "&.Mui-checked": {
                        color: theme.colors.primary[500],
                      },
                    }}
                  />
                }
                label="Poison"
              />
              <FormControlLabel
                value="psychic"
                control={
                  <Radio
                    sx={{
                      color: theme.colors.accent[500],
                      "&.Mui-checked": {
                        color: theme.colors.primary[500],
                      },
                    }}
                  />
                }
                label="Psychic"
              />
              <FormControlLabel
                value="rock"
                control={
                  <Radio
                    sx={{
                      color: theme.colors.accent[500],
                      "&.Mui-checked": {
                        color: theme.colors.primary[500],
                      },
                    }}
                  />
                }
                label="Rock"
              />
              <FormControlLabel
                value="steel"
                control={
                  <Radio
                    sx={{
                      color: theme.colors.accent[500],
                      "&.Mui-checked": {
                        color: theme.colors.primary[500],
                      },
                    }}
                  />
                }
                label="Steel"
              />
              <FormControlLabel
                value="water"
                control={
                  <Radio
                    sx={{
                      color: theme.colors.accent[500],
                      "&.Mui-checked": {
                        color: theme.colors.primary[500],
                      },
                    }}
                  />
                }
                label="Water"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </Popover>
    </Container>
  );
}
